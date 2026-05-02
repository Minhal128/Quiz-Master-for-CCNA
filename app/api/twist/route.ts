import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const maxDuration = 60;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function twistBatch(questions: any[]) {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{
            role: "system",
            content: `You are an expert Huawei HCIA/CCNA Datacom networking instructor. 
You are given a JSON array of quiz questions. For each question, moderately twist the wording so it remains similar to standard Huawei HCIA/CCNA exam "dumps". Do not make it overly advanced or complex.
Simply change literal values like IP addresses, MAC addresses, port numbers, VLANs, or slightly alter the phrasing (e.g., change "could not" to "could", or "is" to "is not", and adjust the correct answer accordingly). Keep it realistic and concise.
IMPORTANT: You MUST return EXACTLY the same number of questions as you received. Do not skip any.
- Keep the format similar to the original. If it was single choice, keep it single choice unless it makes perfect sense to make it multiple choice.
- Image Scenarios (CLI/Topology): If the original question referred to an image or topology, maintain that reference. You MAY include an "imagePrompt" string which clearly describes an architecture diagram or CLI snippet to visualize for this question. Keep "imagePrompt" simple and focused on CLI outputs or basic topologies.

Format:
{
  "twistedQuestions": [
    {
      "id": "original-id",
      "question": "Twisted Huawei scenario text (intermediate level, similar to exam dumps)...",
      "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
      "correct": ["A"],
      "type": "single",
      "explanation": "Brief explanation cross-verifying Huawei HCIA specific behaviors...",
      "imagePrompt": "Description of the network topology or CLI output (like SWA connected to SWB via G0/0/2 and 3, etc.)"
    }
  ]
}`
        }, {
            role: "user",
            content: JSON.stringify(questions)
        }],
        response_format: { type: "json_object" },
        max_tokens: 4096
    });

    const resultText = completion.choices[0].message.content;
    let twisted = [];
    if (resultText) {
        const parsed = JSON.parse(resultText);
        twisted = parsed.twistedQuestions || parsed.questions || parsed;
        if (!Array.isArray(twisted)) twisted = Object.values(parsed);
    }
    return twisted;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { questions } = body;

        if (!questions || !Array.isArray(questions)) {
            return NextResponse.json({ error: 'No questions provided' }, { status: 400 });
        }

        // Split into batches of 10 to avoid LLM token truncation and encourage thorough rewriting
        const chunkSize = 10;
        const batches = [];
        for (let i = 0; i < questions.length; i += chunkSize) {
            batches.push(questions.slice(i, i + chunkSize));
        }

        // Process all batches in parallel
        const results = await Promise.all(batches.map(b => twistBatch(b)));

        // Flatten the results
        const finalTwistedQuestions = results.flat();

        // Generate images for the questions using the prompt
        // Generating images for the first few to avoid timeouts on 60 questions
        let imagesGenerated = 0;
        for (const q of finalTwistedQuestions) {
            if (q.imagePrompt && imagesGenerated < 3) {
                try {
                    const imageRes = await openai.images.generate({
                        model: "dall-e-3",
                        prompt: q.imagePrompt,
                        n: 1,
                        size: "1024x1024"
                    });
                    if (imageRes.data && imageRes.data.length > 0) {
                        q.image = imageRes.data[0].url;
                        imagesGenerated++;
                    }
                } catch (err) {
                    console.error("Image gen failed", err);
                }
            }
        }

        return NextResponse.json({ questions: finalTwistedQuestions });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
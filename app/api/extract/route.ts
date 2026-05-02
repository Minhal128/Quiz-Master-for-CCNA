import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import * as pdfParse from 'pdf-parse';

export const maxDuration = 60;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const pdfData = await pdfParse(buffer);
        const textContent = pdfData.text;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{
                role: "system",
                content: `You are an expert quiz generator. Extract questions from the provided text, but twist them, paraphrase them, or change specific values so they are different but test the same concepts.
Return ONLY a JSON array of questions, adhering to this format:
[
  {
    "id": "random-id",
    "question": "Twisted question text",
    "options": { "A": "Opt A", "B": "Opt B", "C": "Opt C", "D": "Opt D" },
    "correct": ["A"],
    "type": "single",
    "explanation": "Why this is correct",
    "imagePrompt": "A detailed DALL-E prompt to generate an image illustrating this question concept."
  }
]`
            }, {
                role: "user",
                content: textContent
            }],
            response_format: { type: "json_object" }
        });

        const resultText = completion.choices[0].message.content;
        let questions = [];
        if (resultText) {
            const parsed = JSON.parse(resultText);
            questions = parsed.questions || parsed;
            if (!Array.isArray(questions)) questions = Object.values(parsed);
        }

        // Optionally generate images for the questions using the prompt
        // For large uploads, we might only do it for the first few to avoid timeouts
        for (let i = 0; i < Math.min(questions.length, 3); i++) {
            const q = questions[i];
            if (q.imagePrompt) {
                try {
                    const imageRes = await openai.images.generate({
                        model: "dall-e-3",
                        prompt: q.imagePrompt,
                        n: 1,
                        size: "1024x1024"
                    });
                    if (imageRes.data && imageRes.data.length > 0) {
                        q.image = imageRes.data[0].url;
                    }
                } catch (err) {
                    console.error("Image gen failed", err);
                }
            }
        }

        return NextResponse.json({ questions });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

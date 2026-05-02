import re
import json

def parse_txt():
    with open('quiz.txt', 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip header
    if "here is the questions" in content:
        content = content.split("here is the questions")[1]

    # Split by numbers matching "1. ", "2. ", etc. (but careful not to split inside text)
    parts = re.split(r'\n(?=\d+\.\s)', '\n' + content.strip())
    
    questions = []
    
    for part in parts:
        if not part.strip(): continue
        
        # parse question number and text
        lines = part.strip().split('\n')
        
        q_text = ""
        options = {}
        answer = []
        explanation = ""
        
        mode = "q"
        curr_opt = None
        
        for line in lines:
            line = line.strip()
            if not line: continue
            
            if mode == "q":
                m_opt = re.match(r'^([A-F])\.\s*(.*)', line)
                if m_opt:
                    mode = "o"
                    curr_opt = m_opt.group(1)
                    options[curr_opt] = m_opt.group(2)
                else:
                    q_text += line + " "
            elif mode == "o":
                m_ans = re.match(r'^Answer:\s*(.*)', line, re.IGNORECASE)
                if m_ans:
                    mode = "a"
                    ans_str = m_ans.group(1).replace(',', '').replace(' ', '').replace('and', '')
                    answer = [ch.upper() for ch in ans_str if ch.isalpha()]
                else:
                    m_opt = re.match(r'^([A-F])\.\s*(.*)', line)
                    if m_opt:
                        curr_opt = m_opt.group(1)
                        options[curr_opt] = m_opt.group(2)
                    elif curr_opt:
                        options[curr_opt] += " " + line
            elif mode == "a":
                explanation += line + " "

        if not q_text or not options or not answer: continue
        
        # Clean up question text (remove number prefix)
        q_text = re.sub(r'^\d+\.\s*', '', q_text.strip())
        
        q_type = "single" if len(answer) == 1 else "multiple"
        
        q_id = len(questions) + 1
        
        questions.append({
            "id": q_id,
            "question": q_text,
            "options": options,
            "correct": answer,
            "type": q_type,
            "explanation": explanation.strip()
        })
        
    out = """export interface Question {
  id: number | string;
  question: string;
  options: Record<string, string>;
  correct: string[];
  type: 'single' | 'multiple';
  explanation: string;
  image?: string;
}

export const questionsBank: Question[] = """ + json.dumps(questions, indent=2) + ";\n"

    with open('lib/questions.ts', 'w', encoding='utf-8') as f:
        f.write(out)

    print(f"Parsed {len(questions)} questions.")

if __name__ == '__main__':
    parse_txt()
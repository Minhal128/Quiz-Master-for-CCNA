import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export interface QuizSession {
    sessionId: string;
    username: string;
    quizId: string;
    quizTitle: string;
    answers: Record<number, string[]>;
    updatedAt: number;
    completed: boolean;
}

let activeSessions: QuizSession[] = [];

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const quizId = searchParams.get('quizId');
    let res = activeSessions;
    if (quizId) {
        res = res.filter(s => s.quizId === quizId);
    }
    return NextResponse.json(res);
}

export async function POST(req: Request) {
    const body = await req.json();
    const { sessionId, username, quizId, quizTitle, answers, completed } = body;

    let session = activeSessions.find(s => s.sessionId === sessionId);
    if (!session) {
        session = { sessionId, username, quizId, quizTitle, answers: answers || {}, updatedAt: Date.now(), completed: !!completed };
        activeSessions.push(session);
    } else {
        if (answers) session.answers = answers;
        if (completed !== undefined) session.completed = completed;
        session.updatedAt = Date.now();
    }

    return NextResponse.json({ success: true, session });
}

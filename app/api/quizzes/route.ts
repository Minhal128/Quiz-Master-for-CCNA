import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

let serverQuizzes: any[] = [];

export async function GET() {
    return NextResponse.json(serverQuizzes);
}

export async function POST(req: Request) {
    const quiz = await req.json();
    serverQuizzes.push(quiz);
    return NextResponse.json({ success: true, quiz });
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    serverQuizzes = serverQuizzes.filter(q => q.id !== id);
    return NextResponse.json({ success: true });
}

import { Question } from './questions';

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  totalQuestions: number;
  timeLimit?: number; // Time limit in minutes
  createdAt: Date;
}

export async function getQuizzes(): Promise<Quiz[]> {
  const res = await fetch('/api/quizzes', { cache: 'no-store' });
  return await res.json();
}

export async function getQuiz(id: string): Promise<Quiz | undefined> {
  const quizzes = await getQuizzes();
  return quizzes.find(q => q.id === id);
}

export async function addQuiz(quiz: Quiz): Promise<void> {
  await fetch('/api/quizzes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quiz)
  });
}

export async function deleteQuiz(id: string): Promise<void> {
  await fetch('/api/quizzes?id=' + id, {
    method: 'DELETE'
  });
}

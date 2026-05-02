'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getQuiz, Quiz } from '@/lib/store';

export default function AdminAnswerKeyClient({ id }: { id: string }) {
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const hasAuth = document.cookie.includes('adminAuth=true');
        if (!hasAuth) {
            window.location.href = '/admin/login';
            return;
        }

        if (id) {
            getQuiz(id).then(q => {
                setQuiz(q || null);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <div className="text-center py-20 text-xl text-gray-500">Loading Answer Key...</div>;
    }

    if (!quiz) {
        return <div className="text-center py-20 text-xl text-red-500">Quiz not found!</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{quiz.title} - Answer Key</h1>
                        <p className="text-gray-500 mt-2">Total Questions: {quiz.totalQuestions}</p>
                    </div>
                    <Link href="/admin/dashboard">
                        <button className="px-5 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                            Back to Dashboard
                        </button>
                    </Link>
                </div>

                <div className="space-y-8">
                    {quiz.questions.map((q, idx) => (
                        <div key={q.id || idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex gap-4">
                                <span className="font-bold text-xl text-blue-600">Q{idx + 1}.</span>
                                <div className="flex-1">
                                    <p className="text-lg font-medium text-gray-900 mb-4">{q.question}</p>

                                    {q.image && (
                                        <img src={q.image} alt="Question Diagram" className="mb-4 max-w-full h-auto rounded border border-gray-200 shadow-sm" />
                                    )}

                                    <div className="space-y-3 mb-6">
                                        {Object.entries(q.options || {}).map(([key, value]) => {
                                            const isCorrect = q.correct.includes(key);
                                            return (
                                                <div key={key} className={`p-4 rounded border ${isCorrect ? 'bg-green-50 border-green-500 text-green-900' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                                                    <div className="flex items-start">
                                                        <span className="font-bold mr-3">{key}.</span>
                                                        <span>{String(value)}</span>
                                                        {isCorrect && <span className="ml-auto font-bold text-green-600">✓ Correct</span>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded p-4">
                                        <h4 className="font-bold text-blue-900 mb-1">Explanation:</h4>
                                        <p className="text-blue-800 text-sm leading-relaxed">{q.explanation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
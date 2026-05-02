'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getQuizzes } from '@/lib/store';
import { Quiz } from '@/lib/store';

export default function HomePage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuizzes().then(q => {
      setQuizzes(q);
      setLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Quiz Master</h1>
              <p className="text-gray-600 mt-2">Test your knowledge across various topics</p>
            </div>
            <Link href="/admin/login">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Admin Panel
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Quizzes</h2>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block">
              <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 mt-4">Loading quizzes...</p>
          </div>
        ) : quizzes.length === 0 ? (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-12 text-center">
            <p className="text-gray-700 text-lg">No quizzes available yet.</p>
            <p className="text-gray-600 mt-2">Check back soon or visit the admin panel to create one.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map(quiz => (
              <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{quiz.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="text-2xl font-bold text-blue-600">{quiz.totalQuestions}</span>
                    <span className="ml-2">Questions</span>
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Start Quiz →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

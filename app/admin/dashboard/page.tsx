'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getQuizzes, deleteQuiz } from '@/lib/store';
import { Quiz } from '@/lib/store';

export default function AdminDashboardPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasAuth = document.cookie.includes('adminAuth=true');
    if (hasAuth) {
      setIsAuthenticated(true);
      loadQuizzes();
      setIsMounted(true);
    } else {
      window.location.href = '/admin/login';
    }
  }, []);

  const loadQuizzes = async () => {
    setQuizzes(await getQuizzes());
    setLoading(false);
  };

  const handleDeleteQuiz = async (id: string, title: string) => {
    if (confirm(`Delete quiz "${title}"?`)) {
      await deleteQuiz(id);
      loadQuizzes();
    }
  };

  const handleLogout = () => {
    document.cookie = 'adminAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location.href = '/admin/login';
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your quizzes</p>
            </div>
            <div className="flex gap-3">
              <Link href="/admin/create">
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  + Create Quiz
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-600 text-sm font-medium">Total Quizzes</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">{quizzes.length}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-600 text-sm font-medium">Total Questions</p>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              {quizzes.reduce((sum, q) => sum + q.totalQuestions, 0)}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-600 text-sm font-medium">Questions Available</p>
            <p className="text-4xl font-bold text-green-600 mt-2">30</p>
          </div>
        </div>

        {/* Quizzes List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading quizzes...</p>
          </div>
        ) : quizzes.length === 0 ? (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-12 text-center">
            <p className="text-gray-700 text-lg font-medium">No quizzes created yet</p>
            <p className="text-gray-600 mt-2">Create your first quiz to get started</p>
            <Link href="/admin/create">
              <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                Create First Quiz
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Quiz Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Questions</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Created</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {quizzes.map(quiz => (
                    <tr key={quiz.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{quiz.title}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {quiz.totalQuestions} / {quiz.questions.length}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {new Date(quiz.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Link href={`/admin/quiz/${quiz.id}`}>
                          <button className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors text-sm font-medium">
                            Answer Key
                          </button>
                        </Link>
                        <Link href={`/quiz/${quiz.id}`}>
                          <button className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-sm font-medium">
                            Preview
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDeleteQuiz(quiz.id, quiz.title)}
                          className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm font-medium"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">✓ Quick Help</h3>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Click <strong>"Create Quiz"</strong> to create a new quiz</li>
            <li>• Quiz titles should be descriptive (e.g., &quot;CCNA Network Fundamentals&quot;)</li>
            <li>• Specify how many questions you want (e.g., 60 questions = 100%)</li>
            <li>• Random questions will be selected from the question bank</li>
            <li>• Click <strong>"Preview"</strong> to test a quiz before publishing</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

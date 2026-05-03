'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getQuizzes, deleteQuiz } from '@/lib/store';
import { Quiz } from '@/lib/store';
import { QuizSession } from '@/app/api/sessions/route';

export default function AdminDashboardPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [activeSessions, setActiveSessions] = useState<QuizSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasAuth = document.cookie.includes('adminAuth=true');
    if (hasAuth) {
      setIsAuthenticated(true);
      loadQuizzes();
      fetchSessions();
      setIsMounted(true);
    } else {
      window.location.href = '/admin/login';
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(fetchSessions, 2000); // Poll every 2 seconds
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const fetchSessions = async () => {
    try {
      const res = await fetch('/api/sessions');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setActiveSessions(data);
    } catch (err) {
      console.error("Failed to fetch sessions:", err);
    }
  };

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

        {/* Live Active Sessions Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Student Sessions</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-200">
            {activeSessions.length === 0 ? (
              <p className="text-gray-600 italic">No students currently taking quizzes.</p>
            ) : (
              <div className="space-y-6">
                {activeSessions.map(session => {
                  const sessionQuiz = quizzes.find(q => q.id === session.quizId);
                  let correctCount = 0;

                  if (sessionQuiz) {
                    correctCount = Object.entries(session.answers).filter(([qIndex, options]) => {
                      const q = sessionQuiz.questions[Number(qIndex)];
                      if (!q) return false;
                      const correctArr = [...q.correct].sort();
                      const ansArr = [...options].sort();
                      return ansArr.join(',') === correctArr.join(',');
                    }).length;
                  }

                  const percentage = sessionQuiz ? Math.round((correctCount / sessionQuiz.totalQuestions) * 100) : 0;

                  return (
                    <div key={session.sessionId} className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                      <div className="flex justify-between items-center mb-4 border-b border-blue-200 pb-2">
                        <h3 className="font-bold text-blue-900">{session.username} - {session.quizTitle}</h3>
                        <div className="flex items-center gap-3">
                          <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow-sm">
                            Score: {correctCount}/{sessionQuiz?.totalQuestions || '?'} ({percentage}%)
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${session.completed ? 'bg-green-500 text-white' : 'bg-yellow-400 text-yellow-900'}`}>
                            {session.completed ? 'Completed' : 'In Progress (Live)'}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-800">
                        <h4 className="font-semibold mb-2">Real-Time Answers:</h4>
                        <div className="flex flex-wrap gap-2">
                          {Object.keys(session.answers).length === 0 ? (
                            <span className="text-gray-500">Waiting for responses...</span>
                          ) : (
                            Object.entries(session.answers).map(([qIndex, options]) => {
                              let isCorrect = false;
                              if (sessionQuiz) {
                                const q = sessionQuiz.questions[Number(qIndex)];
                                if (q) {
                                  const correctArr = [...q.correct].sort();
                                  const ansArr = [...options].sort();
                                  isCorrect = ansArr.join(',') === correctArr.join(',');
                                }
                              }

                              const bgColorClass = isCorrect ? 'bg-green-100 border-green-400 text-green-900' : 'bg-red-100 border-red-400 text-red-900';

                              return (
                                <div key={qIndex} className={`border px-3 py-1 rounded shadow-sm ${bgColorClass}`}>
                                  <span className="font-medium">Q{Number(qIndex) + 1}:</span> {options.join(', ')}
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
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

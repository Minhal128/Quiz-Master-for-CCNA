'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { addQuiz } from '@/lib/store';
import { questionsBank, Question } from '@/lib/questions';

export default function CreateQuizPage() {
  const [title, setTitle] = useState('');
  const [timeLimit, setTimeLimit] = useState(60);
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(60);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  const [isTwisting, setIsTwisting] = useState(false);

  const router = useRouter();
  const maxAvailableQuestions = questionsBank.length;

  useEffect(() => {
    const hasAuth = document.cookie.includes('adminAuth=true');
    if (hasAuth) {
      setIsAuthenticated(true);
      setIsMounted(true);
    } else {
      window.location.href = '/admin/login';
    }
  }, []);

  const handleTwistQuestions = async () => {
    setError('');
    const rangeLength = endRange - startRange + 1;

    if (rangeLength < 60) {
      setError(`Selected range contains only ${rangeLength} questions. Need at least 60.`);
      return;
    }

    if (startRange < 1 || endRange > maxAvailableQuestions || startRange > endRange) {
      setError('Invalid range selection.');
      return;
    }

    setIsTwisting(true);

    try {
      const rangeSlice = questionsBank.slice(startRange - 1, endRange);
      const shuffled = [...rangeSlice].sort(() => Math.random() - 0.5);
      const chosen60 = shuffled.slice(0, 60);

      const res = await fetch('/api/twist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questions: chosen60, difficulty })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to twist questions');

      setSelectedQuestions(data.questions || []);
    } catch (err: any) {
      setError(err.message || 'Error occurred while twisting');
    } finally {
      setIsTwisting(false);
    }
  };

  const handleCreateQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Quiz title is required');
      return;
    }

    if (selectedQuestions.length !== 60) {
      setError('You must generate and have exactly 60 twisted questions before creating the quiz.');
      return;
    }

    setLoading(true);

    try {
      const newQuiz = {
        id: Date.now().toString(),
        title: title.trim(),
        timeLimit: timeLimit,
        questions: selectedQuestions,
        totalQuestions: selectedQuestions.length,
        createdAt: new Date()
      };

      await addQuiz(newQuiz);
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Failed to create quiz. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted || !isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Create New Twisted Quiz</h1>
          <p className="text-gray-600 mt-1">Select a range, twist 60 questions with Huawei CCNA concepts</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <form onSubmit={handleCreateQuiz} className="space-y-8">

          <div className="bg-white rounded-lg shadow-md p-8">
            <label htmlFor="title" className="block text-lg font-bold text-gray-900 mb-3">
              Quiz Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., CCNA Twisted Exam 1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 text-lg mb-6"
              disabled={loading || isTwisting}
            />

            <label htmlFor="timeLimit" className="block text-lg font-bold text-gray-900 mb-3">
              Time Limit (Minutes)
            </label>
            <input
              id="timeLimit"
              type="number"
              min="1"
              value={timeLimit}
              onChange={(e) => setTimeLimit(parseInt(e.target.value) || 60)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 text-lg mb-6"
              disabled={loading || isTwisting}
            />

            <label htmlFor="difficulty" className="block text-lg font-bold text-gray-900 mb-3">
              Twist Difficulty
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 text-lg"
              disabled={loading || isTwisting}
            >
              <option value="Normal">Normal</option>
              <option value="Intermediate">Intermediate</option>
              <option value="A little bit more intermediate">A little bit more intermediate</option>
              <option value="Advanced">Advanced (Extremely rigorous)</option>
            </select>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <label className="block text-lg font-bold text-gray-900 mb-3">
              Select Question Range (Max {maxAvailableQuestions})
            </label>
            <p className="text-gray-600 text-sm mb-4">
              The test requires a fixed 60 questions. Select a range of at least 60 questions. The system will randomly pick 60 from this range and twist them via AI.
            </p>

            <div className="flex gap-4 items-center mb-6">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">Start Range</label>
                <input
                  type="number"
                  min="1"
                  max={endRange - 59 > 0 ? endRange - 59 : 1}
                  value={startRange}
                  onChange={(e) => setStartRange(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  disabled={loading || isTwisting}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">End Range</label>
                <input
                  type="number"
                  min={startRange + 59}
                  max={maxAvailableQuestions}
                  value={endRange}
                  onChange={(e) => setEndRange(parseInt(e.target.value) || maxAvailableQuestions)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  disabled={loading || isTwisting}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleTwistQuestions}
              disabled={isTwisting || loading}
              className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              {isTwisting ? 'Extracting & Twisting via AI...' : 'Twist 60 Questions'}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Selected & Twisted Questions ({selectedQuestions.length}/60)
            </h3>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {selectedQuestions.length > 0 ? (
                selectedQuestions.map((q, idx) => (
                  <div key={q.id || idx} className="border border-gray-200 rounded p-3 bg-gray-50 flex gap-4">
                    {q.image && (
                      <div className="w-24 h-24 flex-shrink-0">
                        <img src={q.image} alt="Question Graphic" className="w-full h-full object-cover rounded border border-gray-300" />
                      </div>
                    )}
                    <div className="flex gap-3 flex-1">
                      <span className="font-bold text-blue-600 flex-shrink-0 w-6">{idx + 1}.</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 text-sm line-clamp-2 font-medium">{q.question}</p>
                        <p className="text-gray-500 text-xs mt-1">Type: {q.type === 'single' ? 'Single Answer' : 'Multiple Answers'}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-6">No twisted questions generated yet. Click the button above.</p>
              )}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          <div className="flex gap-4">
            <Link href="/admin/dashboard" className="flex-1">
              <button
                type="button"
                disabled={loading || isTwisting}
                className="w-full px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium disabled:opacity-50"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={loading || isTwisting || !title || selectedQuestions.length !== 60}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:bg-gray-400 flex items-center justify-center gap-2"
            >
              {loading ? 'Creating...' : '✓ Create Quiz'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

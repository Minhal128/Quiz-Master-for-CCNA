'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { getQuiz } from '@/lib/store';
import { Quiz } from '@/lib/store';
import Link from 'next/link';

export default function ResultsPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [loading, setLoading] = useState(true);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (id) {
      getQuiz(id as string).then(foundQuiz => {
        if (foundQuiz) setQuiz(foundQuiz);
      });
      const answersStr = searchParams.get('answers');
      if (answersStr) {
        try {
          setAnswers(JSON.parse(answersStr));
        } catch (e) {
          console.error('Failed to parse answers');
        }
      }
    }
    setLoading(false);
  }, [id, searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-700 text-lg">Quiz not found</p>
          <Link href="/">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Calculate results
  let correctCount = 0;
  const results = quiz.questions.map((q, idx) => {
    const userAnswers = answers[idx] || [];
    const isCorrect =
      userAnswers.length > 0 &&
      userAnswers.length === q.correct.length &&
      userAnswers.every(a => q.correct.includes(a)) &&
      q.correct.every(c => userAnswers.includes(c));

    if (isCorrect) correctCount++;

    return {
      index: idx,
      question: q,
      userAnswers,
      isCorrect
    };
  });

  const percentage = Math.round((correctCount / quiz.questions.length) * 100);
  const score = `${correctCount}/${quiz.questions.length}`;

  const toggleQuestion = (idx: number) => {
    const newSet = new Set(expandedQuestions);
    if (newSet.has(idx)) {
      newSet.delete(idx);
    } else {
      newSet.add(idx);
    }
    setExpandedQuestions(newSet);
  };

  const getScoreColor = (pct: number) => {
    if (pct >= 80) return 'text-green-600';
    if (pct >= 60) return 'text-blue-600';
    if (pct >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (pct: number) => {
    if (pct >= 80) return 'bg-green-50 border-green-200';
    if (pct >= 60) return 'bg-blue-50 border-blue-200';
    if (pct >= 40) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{quiz.title}</h1>
          <p className="text-gray-600 mt-2">Quiz Results</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Score Card */}
        <div className={`border-2 rounded-lg p-8 mb-8 ${getScoreBgColor(percentage)}`}>
          <div className="text-center">
            <p className="text-gray-700 text-lg font-medium mb-2">Your Score</p>
            <div className="flex items-center justify-center gap-4">
              <div className={`text-6xl font-bold ${getScoreColor(percentage)}`}>
                {percentage}%
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">{score}</p>
                <p className="text-gray-600">Correct Answers</p>
              </div>
            </div>

            {/* Performance Message */}
            <div className="mt-6 text-gray-700">
              {percentage >= 80 && <p className="text-lg font-semibold">🎉 Excellent performance!</p>}
              {percentage >= 60 && percentage < 80 && <p className="text-lg font-semibold">✓ Good job! Keep practicing.</p>}
              {percentage >= 40 && percentage < 60 && <p className="text-lg font-semibold">Review the material and try again.</p>}
              {percentage < 40 && <p className="text-lg font-semibold">Keep practicing to improve.</p>}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-600 text-sm font-medium">Correct</p>
            <p className="text-3xl font-bold text-green-600">{correctCount}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-600 text-sm font-medium">Incorrect</p>
            <p className="text-3xl font-bold text-red-600">{quiz.questions.length - correctCount}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-600 text-sm font-medium">Total Questions</p>
            <p className="text-3xl font-bold text-blue-600">{quiz.questions.length}</p>
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-8 py-4">
            <h2 className="text-xl font-bold text-gray-900">Question Review</h2>
            <p className="text-gray-600 text-sm mt-1">Click on any question to see detailed feedback</p>
          </div>

          <div className="divide-y divide-gray-200">
            {results.map((result, idx) => (
              <div key={idx} className="border-l-4 border-gray-200">
                <button
                  onClick={() => toggleQuestion(idx)}
                  className={`w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors ${result.isCorrect ? 'border-l-green-500 bg-green-50' : 'border-l-red-500 bg-red-50'
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-gray-700">Q{idx + 1}</span>
                        <span className={`text-sm font-bold px-3 py-1 rounded ${result.isCorrect
                            ? 'bg-green-200 text-green-800'
                            : 'bg-red-200 text-red-800'
                          }`}>
                          {result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium">{result.question.question}</p>
                    </div>
                    <span className="text-gray-600 ml-4">
                      {expandedQuestions.has(idx) ? '▼' : '▶'}
                    </span>
                  </div>
                </button>

                {expandedQuestions.has(idx) && (
                  <div className="px-8 py-6 bg-white border-t border-gray-200 space-y-4">
                    {/* User's Answer */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-3">Your Answer:</p>
                      {result.userAnswers.length === 0 ? (
                        <p className="text-gray-500 italic">No answer selected</p>
                      ) : (
                        <div className="space-y-2">
                          {result.userAnswers.map(ans => (
                            <p key={ans} className="text-gray-700 bg-yellow-50 p-3 rounded border border-yellow-200">
                              <span className="font-semibold">{ans}.</span> {result.question.options[ans as keyof typeof result.question.options]}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Correct Answer */}
                    {!result.isCorrect && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-3">Correct Answer:</p>
                        <div className="space-y-2">
                          {result.question.correct.map(ans => (
                            <p key={ans} className="text-gray-700 bg-green-50 p-3 rounded border border-green-200">
                              <span className="font-semibold">{ans}.</span> {result.question.options[ans as keyof typeof result.question.options]}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Explanation */}
                    {result.question.explanation && (
                      <div className="bg-blue-50 border border-blue-200 rounded p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Explanation:</p>
                        <p className="text-gray-700">{result.question.explanation}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <Link href="/" className="flex-1">
            <button className="w-full px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium">
              Back to Home
            </button>
          </Link>
          <button
            onClick={() => router.push(`/quiz/${id}`)}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Retake Quiz
          </button>
        </div>
      </main>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getQuiz } from '@/lib/store';
import { Quiz } from '@/lib/store';
import { Question } from '@/lib/questions';

export default function QuizPage() {
  const { id } = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Authentication & Session
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    if (id) {
      getQuiz(id as string).then(foundQuiz => {
        if (foundQuiz) {
          setQuiz(foundQuiz);
          if (foundQuiz.timeLimit) {
            setTimeLeft(foundQuiz.timeLimit * 60);
          }
        }
        setLoading(false);
      });
    }
  }, [id]);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0 || showLogin) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev && prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showLogin]);

  const submitQuiz = () => {
    if (sessionId) {
      fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          answers,
          completed: true
        })
      }).catch(err => console.error(err));
    }
    const queryParams = new URLSearchParams();
    queryParams.append('answers', JSON.stringify(answers));
    router.push(`/results/${id}?${queryParams.toString()}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-700 text-lg">Quiz not found</p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentIndex];
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === quiz.questions.length - 1;
  const currentAnswers = answers[currentIndex] || [];

  const handleAnswerChange = (option: string) => {
    let newAnswersForCurrent = [];
    if (currentQuestion.type === 'single') {
      newAnswersForCurrent = [option];
    } else {
      // Multiple choice
      newAnswersForCurrent = [...currentAnswers];
      if (newAnswersForCurrent.includes(option)) {
        newAnswersForCurrent = newAnswersForCurrent.filter(a => a !== option);
      } else {
        newAnswersForCurrent.push(option);
      }
    }

    const updatedAnswers = {
      ...answers,
      [currentIndex]: newAnswersForCurrent
    };

    setAnswers(updatedAnswers);

    // Sync with server
    if (sessionId) {
      fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          answers: updatedAnswers
        })
      }).catch(err => console.error(err));
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex(currentIndex + 1);
    } else {
      submitQuiz();
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progress = ((currentIndex + 1) / quiz.questions.length) * 100;

  if (showLogin) {
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      if ((username === 'Fabiha Minhal' || username === 'admin') && password === '2107') {
        const newSessionId = crypto.randomUUID();
        try {
          await fetch('/api/sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sessionId: newSessionId,
              username,
              quizId: id,
              quizTitle: quiz?.title || 'Unknown Quiz',
              answers: {},
              completed: false
            })
          });
          setSessionId(newSessionId);
          setShowLogin(false);
        } catch (err) {
          setLoginError('Failed to start session');
        }
      } else {
        setLoginError('Invalid username or password');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to attempt quiz
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                  />
                </div>
              </div>
              {loginError && (
                <div className="text-red-600 text-sm bg-red-50 p-2 rounded">{loginError}</div>
              )}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Start Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-6 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-40">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{quiz.title}</h1>
            <p className="text-gray-600 mt-1">Question {currentIndex + 1} of {quiz.questions.length}</p>
          </div>
          {timeLeft !== null && (
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Time Remaining</span>
              <span className={`text-2xl font-bold ${timeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-gray-900'}`}>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
        <div className="max-w-4xl mx-auto px-6 pb-2">
          {/* Progress Bar */}
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
              {currentQuestion.question}
            </h2>

            {currentQuestion.image && (
              <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
                <img src={currentQuestion.image} alt="Question Reference" className="w-full max-w-lg object-contain" />
              </div>
            )}

            {/* Options */}
            <div className="space-y-3">
              {Object.entries(currentQuestion.options).map(([key, value]) => (
                <label
                  key={key}
                  className="flex items-start p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all"
                >
                  <input
                    type={currentQuestion.type === 'single' ? 'radio' : 'checkbox'}
                    name={`question-${currentIndex}`}
                    value={key}
                    checked={currentAnswers.includes(key)}
                    onChange={() => handleAnswerChange(key)}
                    className="w-5 h-5 mt-1 text-blue-600 rounded cursor-pointer"
                  />
                  <span className="ml-4 flex-1">
                    <span className="font-semibold text-gray-900">{key}.</span>
                    <span className="ml-2 text-gray-700">{value}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700">
              {currentQuestion.type === 'single'
                ? '✓ Single answer: Select only one option'
                : '✓ Multiple answers: Select all that apply'}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${isFirstQuestion
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
            >
              ← Previous
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Question {currentIndex + 1} of {quiz.questions.length}
              </p>
            </div>

            <button
              onClick={handleNext}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${isLastQuestion
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              {isLastQuestion ? 'Submit Quiz' : 'Next →'}
            </button>
          </div>

          {/* Quick Jump */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-4">Quick Navigation:</p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {quiz.questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-10 h-10 rounded font-semibold text-sm transition-colors ${idx === currentIndex
                    ? 'bg-blue-600 text-white'
                    : answers[idx]
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { QuizState } from './types';
import { questions } from './data';

export default function App() {
  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const startQuiz = () => {
    setUserAnswers({});
    setQuizState('playing');
  };

  const finishQuiz = () => {
    setQuizState('results');
  };

  const retryQuiz = () => {
    setUserAnswers({});
    setQuizState('welcome');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-16">
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-blue-950 flex items-center gap-3">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shadow-sm">AI</span>
            Ôn Tập Trắc Nghiệm
          </h1>
          {quizState === 'playing' && (
            <div className="text-sm font-medium px-3 py-1 bg-slate-100 rounded-full text-slate-600">
              {Object.keys(userAnswers).length} / {questions.length} đã làm
            </div>
          )}
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {quizState === 'welcome' && (
          <WelcomeScreen onStart={startQuiz} totalQuestions={questions.length} />
        )}
        
        {quizState === 'playing' && (
          <QuizScreen 
            questions={questions}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            onFinish={finishQuiz}
          />
        )}
        
        {quizState === 'results' && (
          <ResultScreen 
            questions={questions}
            userAnswers={userAnswers}
            onRetry={retryQuiz}
          />
        )}
      </main>
    </div>
  );
}

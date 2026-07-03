import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { Question } from '../types';

interface QuizScreenProps {
  questions: Question[];
  userAnswers: Record<number, number>;
  setUserAnswers: React.Dispatch<React.SetStateAction<Record<number, number>>>;
  onFinish: () => void;
}

export default function QuizScreen({ questions, userAnswers, setUserAnswers, onFinish }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const question = questions[currentIndex];
  const hasAnsweredAll = Object.keys(userAnswers).length === questions.length;
  
  const handleOptionSelect = (optionIndex: number) => {
    if (userAnswers[question.id] !== undefined) return;
    setUserAnswers(prev => ({
      ...prev,
      [question.id]: optionIndex
    }));
  };
  
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };
  
  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Sidebar for navigation */}
      <div className="w-full md:w-64 shrink-0 order-2 md:order-1">
         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-24">
            <h3 className="font-medium mb-4 text-slate-700">Danh sách câu hỏi</h3>
            <div className="grid grid-cols-5 md:grid-cols-4 gap-2">
               {questions.map((q, idx) => {
                 const isAnswered = userAnswers[q.id] !== undefined;
                 const isCurrent = currentIndex === idx;
                 return (
                   <button
                     key={q.id}
                     onClick={() => setCurrentIndex(idx)}
                     className={`h-10 w-full rounded-lg text-sm font-medium transition-colors flex items-center justify-center
                      ${isCurrent ? 'ring-2 ring-blue-500 ring-offset-1 z-10 relative' : ''} 
                      ${isAnswered ? (userAnswers[q.id] === q.correctAnswer ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700') : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                     `}
                   >
                     {idx + 1}
                   </button>
                 )
               })}
            </div>
         </div>
      </div>
      
      {/* Main question area */}
      <div className="flex-1 order-1 md:order-2 min-w-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="mb-3 text-sm font-semibold text-blue-600 tracking-wider uppercase">
              {question.category}
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-slate-900 leading-snug mb-8">
              <span className="font-bold mr-2 text-slate-400">Câu {currentIndex + 1}.</span>
              {question.text}
            </h2>
            
            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const isSelected = userAnswers[question.id] === idx;
                const isAnswered = userAnswers[question.id] !== undefined;
                const isCorrect = idx === question.correctAnswer;

                let buttonClass = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50';
                let circleClass = 'border-slate-300';
                let textClass = 'text-slate-700';

                if (isAnswered) {
                  if (isCorrect) {
                    buttonClass = 'border-emerald-500 bg-emerald-50';
                    circleClass = 'border-emerald-500 bg-emerald-500 text-white';
                    textClass = 'text-emerald-900 font-medium';
                  } else if (isSelected) {
                    buttonClass = 'border-rose-500 bg-rose-50';
                    circleClass = 'border-rose-500 bg-rose-500 text-white';
                    textClass = 'text-rose-900 font-medium line-through';
                  } else {
                    buttonClass = 'border-slate-200 opacity-50';
                    circleClass = 'border-slate-200';
                    textClass = 'text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-4 ${buttonClass}`}
                  >
                    <div className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${circleClass}`}>
                      {isAnswered && isCorrect && <Check className="w-3.5 h-3.5" />}
                      {isAnswered && isSelected && !isCorrect && <X className="w-3.5 h-3.5" />}
                    </div>
                    <span className={`text-base leading-relaxed ${textClass}`}>
                      {option}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 md:px-8 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:text-slate-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Câu trước
            </button>
            
            {currentIndex === questions.length - 1 ? (
              <button
                onClick={onFinish}
                disabled={!hasAnsweredAll}
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Nộp bài
                <Check className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 font-medium hover:text-slate-900 transition-colors"
              >
                Câu tiếp
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

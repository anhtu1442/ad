import { motion } from 'motion/react';
import { RotateCcw, CheckCircle2, XCircle, Award } from 'lucide-react';
import { Question } from '../types';

interface ResultScreenProps {
  questions: Question[];
  userAnswers: Record<number, number>;
  onRetry: () => void;
}

export default function ResultScreen({ questions, userAnswers, onRetry }: ResultScreenProps) {
  const correctCount = questions.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);
  
  const percentage = Math.round((correctCount / questions.length) * 100);
  
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 text-center"
      >
        <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Kết quả ôn tập</h2>
        <p className="text-slate-600 text-lg mb-8">Bạn đã hoàn thành bài kiểm tra!</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 min-w-[160px]">
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Điểm số</p>
            <p className="text-4xl font-bold text-blue-600">{correctCount} <span className="text-xl text-slate-400">/ {questions.length}</span></p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 min-w-[160px]">
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Tỷ lệ</p>
            <p className="text-4xl font-bold text-blue-600">{percentage}%</p>
          </div>
        </div>
        
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-3.5 rounded-xl transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          Ôn tập lại
        </button>
      </motion.div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 px-2 pt-4">Chi tiết đáp án</h3>
        {questions.map((q, idx) => {
          const userAnswer = userAnswers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          
          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl p-6 border-l-4 shadow-sm 
                ${isCorrect ? 'border-l-emerald-500 border-y-slate-200 border-r-slate-200' : 'border-l-rose-500 border-y-slate-200 border-r-slate-200'} 
                border-y border-r`}
            >
              <div className="flex gap-4 items-start mb-6">
                <div className="shrink-0 mt-1">
                  {isCorrect ? (
                    <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                  ) : (
                    <XCircle className="w-7 h-7 text-rose-500" />
                  )}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 mb-1.5">{q.category} - Câu {idx + 1}</div>
                  <h4 className="text-lg font-medium text-slate-900 leading-snug">{q.text}</h4>
                </div>
              </div>
              
              <div className="pl-11 space-y-2">
                {q.options.map((opt, optIdx) => {
                  const isUserChoice = userAnswer === optIdx;
                  const isActualCorrect = q.correctAnswer === optIdx;
                  
                  let optStyle = "text-slate-600 bg-slate-50 border-slate-100";
                  if (isActualCorrect) {
                    optStyle = "text-emerald-800 bg-emerald-50 border-emerald-200 font-medium";
                  } else if (isUserChoice && !isActualCorrect) {
                    optStyle = "text-rose-800 bg-rose-50 border-rose-200 line-through opacity-80";
                  }
                  
                  return (
                    <div key={optIdx} className={`px-4 py-3 rounded-xl border ${optStyle} flex items-start gap-3`}>
                      <span className="shrink-0 font-bold opacity-50 w-5">{String.fromCharCode(65 + optIdx)}.</span>
                      <span>{opt}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

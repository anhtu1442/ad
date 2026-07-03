import { motion } from 'motion/react';
import { PlayCircle, BookOpen } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

export default function WelcomeScreen({ onStart, totalQuestions }: WelcomeScreenProps) {
  return (
    <div className="max-w-2xl mx-auto mt-12 md:mt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12"
      >
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-10 h-10" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Ôn Tập Trắc Nghiệm
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Học phần: Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
        </p>
        
        <div className="flex justify-center mb-10">
          <div className="bg-slate-50 rounded-xl px-6 py-4 border border-slate-100 flex items-center gap-4">
            <div className="text-left">
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Tổng số câu hỏi</p>
              <p className="text-2xl font-bold text-slate-800">{totalQuestions} câu</p>
            </div>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto shadow-sm"
        >
          <PlayCircle className="w-6 h-6" />
          Bắt đầu ôn tập
        </button>
      </motion.div>
    </div>
  );
}

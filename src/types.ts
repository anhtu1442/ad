export interface Question {
  id: number;
  category: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export type QuizState = 'welcome' | 'playing' | 'results';

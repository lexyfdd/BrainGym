export type AgeGroup = '10-12' | '13-16' | '18+';

export type CategoryId = 
  | 'logical' 
  | 'brain_teasers' 
  | 'critical' 
  | 'financial_math' 
  | 'money' 
  | 'business' 
  | 'real_life' 
  | 'tricky' 
  | 'problem_solving' 
  | 'decision_making';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind color class
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  categoryId: CategoryId;
  ageGroups: AgeGroup[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: 'multiple_choice';
  text: string;
  options: QuestionOption[];
  explanation: string;
  hint?: string;
  xpReward: number;
  learningObjective: string;
}

export interface UserStats {
  score: number;
  streak: number;
  level: number;
  xp: number;
  skills: Record<string, number>;
}

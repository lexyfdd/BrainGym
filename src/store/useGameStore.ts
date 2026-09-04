import { create } from 'zustand';
import { AgeGroup, CategoryId, Question, UserStats } from '../types';
import { MOCK_QUESTIONS } from '../data/mockData';

interface GameState {
  ageGroup: AgeGroup | null;
  selectedCategoryId: CategoryId | null;
  currentQuestions: Question[];
  currentQuestionIndex: number;
  score: number;
  xpEarned: number;
  stats: UserStats;
  
  setAgeGroup: (age: AgeGroup) => void;
  setCategory: (categoryId: CategoryId) => void;
  startQuiz: () => void;
  answerQuestion: (isCorrect: boolean, xpReward: number) => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  reset: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  ageGroup: null,
  selectedCategoryId: null,
  currentQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  xpEarned: 0,
  stats: {
    score: 742,
    streak: 7,
    level: 4,
    xp: 780,
    skills: {
      'logical': 82,
      'critical': 71,
      'problem_solving': 88,
      'financial_math': 64,
    }
  },

  setAgeGroup: (age) => set({ ageGroup: age }),
  setCategory: (categoryId) => set({ selectedCategoryId: categoryId }),
  
  startQuiz: () => {
    const { ageGroup, selectedCategoryId } = get();
    
    // Combine and deduplicate questions by exact text
    const uniqueQuestionsMap = new Map<string, Question>();
    MOCK_QUESTIONS.forEach(q => {
      uniqueQuestionsMap.set(q.text.trim(), q);
    });
    const uniqueQuestions = Array.from(uniqueQuestionsMap.values());

    // Filter questions based on selection
    let questions = uniqueQuestions.filter(q => 
      (selectedCategoryId ? q.categoryId === selectedCategoryId : true) &&
      (ageGroup ? q.ageGroups.includes(ageGroup) : true)
    );
    
    // Fallback if no questions match perfectly
    if (questions.length === 0) {
      questions = uniqueQuestions;
    }

    // Shuffle questions to ensure they don't get the same ones every time
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    
    // Limit to 100 questions per quiz session to show the entire category pool
    const sessionQuestions = shuffled.slice(0, 100);

    set({ 
      currentQuestions: sessionQuestions,
      currentQuestionIndex: 0,
      score: 0,
      xpEarned: 0
    });
  },

  answerQuestion: (isCorrect, xpReward) => {
    if (isCorrect) {
      set((state) => ({ 
        score: state.score + 1,
        xpEarned: state.xpEarned + xpReward
      }));
    }
  },

  nextQuestion: () => {
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 }));
  },

  finishQuiz: () => {
    set((state) => {
      const accuracy = state.currentQuestions.length > 0 
        ? Math.round((state.score / state.currentQuestions.length) * 100) 
        : 0;
      
      const catId = state.selectedCategoryId;
      const currentSkillScore = catId ? (state.stats.skills[catId] || 0) : 0;
      // Keep the highest score achieved for that category to show progress
      const newSkillScore = catId ? Math.max(currentSkillScore, accuracy) : currentSkillScore;

      return {
        stats: {
          ...state.stats,
          xp: state.stats.xp + state.xpEarned,
          skills: catId ? {
            ...state.stats.skills,
            [catId]: newSkillScore
          } : state.stats.skills
        }
      };
    });
  },

  reset: () => set({ 
    selectedCategoryId: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    xpEarned: 0
  }),
}));

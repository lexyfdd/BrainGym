import { Category, Question } from '../types';
import { generatedSet } from './generated_set';

export const CATEGORIES: Category[] = [
  {
    id: 'logical',
    name: 'Logical Thinking',
    description: 'Patterns, sequences, deduction and reasoning.',
    icon: 'BrainCircuit',
    color: 'bg-primary-500',
  },
  {
    id: 'brain_teasers',
    name: 'Brain Teasers',
    description: 'Fun puzzles requiring careful thinking.',
    icon: 'BrainCircuit', 
    color: 'bg-primary-600',
  },
  {
    id: 'critical',
    name: 'Critical Thinking',
    description: 'Evaluate evidence, assumptions and arguments.',
    icon: 'Scale',
    color: 'bg-secondary-600',
  },
  {
    id: 'financial_math',
    name: 'Financial Mathematics',
    description: 'Percentages, profit, discounts, and money problems.',
    icon: 'Calculator',
    color: 'bg-secondary-500',
  },
  {
    id: 'money',
    name: 'Money Thinking',
    description: 'Budgeting, saving, needs vs wants and decisions.',
    icon: 'Coins',
    color: 'bg-accent-500',
  },
  {
    id: 'business',
    name: 'Business Thinking',
    description: 'Revenue, expenses, profit, pricing and basic business.',
    icon: 'Coins',
    color: 'bg-accent-600',
  },
  {
    id: 'real_life',
    name: 'Real-Life Reasoning',
    description: 'Everyday situations requiring good decisions.',
    icon: 'Compass',
    color: 'bg-pink-500',
  },
  {
    id: 'tricky',
    name: 'Tricky Questions',
    description: 'Questions designed to test attention and careful reading.',
    icon: 'Search',
    color: 'bg-pink-600',
  },
  {
    id: 'problem_solving',
    name: 'Problem Solving',
    description: 'Multi-step problems and practical situations.',
    icon: 'Search',
    color: 'bg-primary-500',
  },
  {
    id: 'decision_making',
    name: 'Decision Making',
    description: 'Compare options and determine the most sensible choice.',
    icon: 'Compass',
    color: 'bg-secondary-500',
  }
];

export const MOCK_QUESTIONS: Question[] = [
  ...generatedSet
];

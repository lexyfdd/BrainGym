import { Question } from '../types';

export const qSet4: Question[] = [
  // A few extra diverse questions to simulate expanded scale
  {
    id: 'q-log-8',
    categoryId: 'logical',
    ageGroups: ['13-16', '18+'],
    difficulty: 'Hard',
    type: 'multiple_choice',
    text: 'A knight on a chessboard is currently on a white square. After exactly 3 valid moves, what color square will it be on?',
    options: [
      { id: 'o1', text: 'White', isCorrect: false },
      { id: 'o2', text: 'Black', isCorrect: true },
      { id: 'o3', text: 'Either', isCorrect: false },
      { id: 'o4', text: 'It depends on the starting position.', isCorrect: false },
    ],
    explanation: 'A knight ALWAYS changes square color with every move. Move 1: Black. Move 2: White. Move 3: Black.',
    learningObjective: 'Apply rule-based parity logic over sequential steps.',
    xpReward: 30,
  },
  {
    id: 'q-mon-8',
    categoryId: 'money',
    ageGroups: ['18+'],
    difficulty: 'Medium',
    type: 'multiple_choice',
    text: 'You are comparing two savings accounts. Account A offers 5% simple interest per year. Account B offers 4.5% compound interest per year. Over a 10-year period, which account yields more?',
    options: [
      { id: 'o1', text: 'Account A', isCorrect: false },
      { id: 'o2', text: 'Account B', isCorrect: true },
      { id: 'o3', text: 'They yield exactly the same', isCorrect: false },
      { id: 'o4', text: 'It depends on the initial amount deposited', isCorrect: false },
    ],
    explanation: 'Compound interest pays interest ON your interest. Over longer periods (like 10 years), even a slightly lower compound rate mathematically overtakes a higher simple rate.',
    learningObjective: 'Understand the long-term mathematical power of compound vs simple interest.',
    xpReward: 20,
  },
  {
    id: 'q-rl-7',
    categoryId: 'real_life',
    ageGroups: ['18+'],
    difficulty: 'Hard',
    type: 'multiple_choice',
    text: 'You receive an aggressively worded email from your boss late on a Friday night criticizing a project. What is the most professionally sound response strategy?',
    options: [
      { id: 'o1', text: 'Reply immediately defending yourself while you are angry.', isCorrect: false },
      { id: 'o2', text: 'Draft a calm response, but do not send it until Monday morning after you have cooled down and reviewed it.', isCorrect: true },
      { id: 'o3', text: 'Ignore the email permanently.', isCorrect: false },
      { id: 'o4', text: 'Quit your job immediately.', isCorrect: false },
    ],
    explanation: 'Reacting emotionally in a professional setting rarely leads to good outcomes. The "24-hour rule" prevents irreversible damage to professional relationships.',
    learningObjective: 'Practice emotional regulation and strategic professional communication.',
    xpReward: 30,
  }
];

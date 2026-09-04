import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Flame, Target, ChevronRight, Share2 } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function Score() {
  const navigate = useNavigate();
  const { score, currentQuestions, xpEarned, stats, finishQuiz, reset } = useGameStore();

  useEffect(() => {
    finishQuiz();
  }, [finishQuiz]);

  const accuracy = currentQuestions.length > 0 
    ? Math.round((score / currentQuestions.length) * 100) 
    : 0;

  const handleContinue = () => {
    reset();
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-8">
      <div className="text-center space-y-4 mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-24 h-24 mx-auto bg-primary-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30"
        >
          <Trophy className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">
          SESSION COMPLETE!
        </h1>
        <p className="text-xl text-gray-600">Great job training your brain today.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center p-6 bg-gradient-to-br from-white to-gray-50">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Score</p>
          <p className="text-3xl font-bold text-dark">{score}/{currentQuestions.length}</p>
        </Card>
        <Card className="text-center p-6 bg-gradient-to-br from-white to-gray-50">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Accuracy</p>
          <p className="text-3xl font-bold text-dark">{accuracy}%</p>
        </Card>
        <Card className="text-center p-6 bg-gradient-to-br from-white to-primary-50 border-primary-100">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">XP Earned</p>
          <p className="text-3xl font-bold text-primary-600">+{xpEarned}</p>
        </Card>
        <Card className="text-center p-6 bg-gradient-to-br from-white to-orange-50 border-orange-100">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2 flex items-center justify-center gap-1">
            <Flame className="w-4 h-4" /> Streak
          </p>
          <p className="text-3xl font-bold text-orange-600">{stats.streak} Days</p>
        </Card>
      </div>

      <Card className="p-8">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-primary-500" /> Skills Practiced
        </h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Logical Thinking</span>
              <span className="font-bold text-primary-600">85%</span>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-primary-500 h-full rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Problem Solving</span>
              <span className="font-bold text-secondary-500">72%</span>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-secondary-500 h-full rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Financial Thinking</span>
              <span className="font-bold text-accent-500">64%</span>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-accent-500 h-full rounded-full" style={{ width: '64%' }}></div>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button size="lg" className="flex-1" onClick={handleContinue}>
          Continue Training <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
        <Button size="lg" variant="outline" className="flex-1">
          <Share2 className="w-5 h-5 mr-2" /> Share Result
        </Button>
      </div>
    </div>
  );
}

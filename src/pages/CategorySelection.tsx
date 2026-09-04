import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, Calculator, Coins, Compass, Search, Scale, ShieldQuestion, ArrowRight } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { CATEGORIES } from '../data/mockData';
import { CategoryId } from '../types';
import { Card } from '../components/ui/Card';

const iconMap: Record<string, any> = {
  BrainCircuit, Calculator, Coins, Compass, Search, Scale, ShieldQuestion
};

export function CategorySelection() {
  const navigate = useNavigate();
  const { setCategory, startQuiz, stats } = useGameStore();

  const handleSelect = (categoryId: CategoryId) => {
    setCategory(categoryId);
    startQuiz();
    navigate('/play');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">WHAT DO YOU WANT TO TRAIN TODAY?</h1>
        <p className="text-xl text-red-100 font-medium">Choose a skill category to begin your training session.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category, idx) => {
          const Icon = iconMap[category.icon] || ShieldQuestion;
          const progressPercent = stats.skills[category.id] || 0;
          
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card 
                hoverable 
                className="h-full flex flex-col group cursor-pointer"
                onClick={() => handleSelect(category.id)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl text-white shadow-sm ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{category.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${category.color}`} style={{ width: `${progressPercent}%` }} />
                      </div>
                      <span className="text-xs font-medium text-gray-500">{progressPercent}%</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm flex-1">{category.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-gray-500 group-hover:text-primary-500 transition-colors">
                  <span>Start Training</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

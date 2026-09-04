import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { User, Users, GraduationCap } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { AgeGroup } from '../types';
import { Card } from '../components/ui/Card';

const AGE_GROUPS: { id: AgeGroup; title: string; subtitle: string; desc: string; icon: any; color: string }[] = [
  {
    id: '10-12',
    title: '10–12',
    subtitle: 'Foundation Thinkers',
    desc: 'Build confidence with logic, puzzles, money basics and everyday decisions.',
    icon: User,
    color: 'text-primary-500 bg-primary-50',
  },
  {
    id: '13-16',
    title: '13–16',
    subtitle: 'Smart Thinkers',
    desc: 'Strengthen reasoning, financial thinking, problem solving and critical thinking.',
    icon: Users,
    color: 'text-secondary-500 bg-secondary-50',
  },
  {
    id: '18+',
    title: '18+',
    subtitle: 'Advanced Thinkers',
    desc: 'Develop practical reasoning, financial skills, business thinking and complex problem solving.',
    icon: GraduationCap,
    color: 'text-pink-500 bg-pink-50',
  }
];

export function AgeSelection() {
  const navigate = useNavigate();
  const setAgeGroup = useGameStore(state => state.setAgeGroup);

  const handleSelect = (age: AgeGroup) => {
    setAgeGroup(age);
    navigate('/categories');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark">WHO ARE YOU TRAINING AS?</h1>
        <p className="text-xl text-gray-600">Select your age group to get customized challenges.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {AGE_GROUPS.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card 
                hoverable 
                className="h-full flex flex-col items-center text-center cursor-pointer border-2 border-transparent hover:border-gray-200"
                onClick={() => handleSelect(group.id)}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${group.color}`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-1">{group.title}</h2>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{group.subtitle}</h3>
                <p className="text-gray-600 mt-auto leading-relaxed">
                  {group.desc}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

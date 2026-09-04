import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Flame, Target, ArrowRight, BrainCircuit } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useGameStore } from '../store/useGameStore';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { stats } = useGameStore();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
            👋 Welcome back, <span className="text-yellow-300 capitalize">{user.name}</span>!
          </h1>
          <p className="text-red-100 text-lg font-medium">
            Level {stats.level} — Smart Solver | Age: {user.age} | Class: {user.studentClass}
          </p>
        </div>
        <Button size="lg" onClick={() => navigate('/categories')} className="bg-yellow-400 text-red-900 hover:bg-yellow-300 shadow-xl shadow-yellow-500/30 font-bold border-none">
          Start Training <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-white flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-3">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Brain Score</p>
          <p className="text-2xl font-bold text-dark">{stats.score}</p>
        </Card>
        
        <Card className="p-6 bg-white flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-3">
            <Flame className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Streak</p>
          <p className="text-2xl font-bold text-dark">{stats.streak} Days</p>
        </Card>

        <Card className="p-6 bg-white flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-secondary-50 text-secondary-500 rounded-full flex items-center justify-center mb-3">
            <Trophy className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Total XP</p>
          <p className="text-2xl font-bold text-dark">{stats.xp}</p>
        </Card>

        <Card className="p-6 bg-white flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mb-3">
            <Target className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Level Progress</p>
          <p className="text-2xl font-bold text-dark">78%</p>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Daily Challenge */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white drop-shadow-sm">TODAY'S TRAINING</h2>
          
          <Card className="bg-gradient-to-br from-dark to-gray-900 text-white overflow-hidden relative p-8">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <BrainCircuit className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-accent-500 font-bold tracking-wider text-sm uppercase mb-4">
                <Target className="w-5 h-5" />
                Daily Brain Challenge
              </div>
              <h3 className="text-2xl font-bold mb-2">The Sunk Cost Dilemma</h3>
              <p className="text-gray-300 mb-6 max-w-md">Can you identify the logical financial flaw in today's real-life scenario?</p>
              
              <div className="flex items-center gap-4">
                <Button variant="accent" onClick={() => navigate('/play')}>
                  Start Challenge
                </Button>
                <span className="text-sm font-medium text-gray-400">+50 XP</span>
              </div>
            </div>
          </Card>

          <h2 className="text-2xl font-bold pt-4 text-white drop-shadow-sm">CONTINUE LEARNING</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card hoverable className="cursor-pointer" onClick={() => navigate('/categories')}>
              <h4 className="font-bold text-lg mb-2">Logical Thinking</h4>
              <p className="text-sm text-gray-500 mb-4">Recommended for your level</p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-primary-500 h-full w-4/5" />
              </div>
            </Card>
            <Card hoverable className="cursor-pointer" onClick={() => navigate('/categories')}>
              <h4 className="font-bold text-lg mb-2">Money Thinking</h4>
              <p className="text-sm text-gray-500 mb-4">Practice budgeting & savings</p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-secondary-500 h-full w-2/3" />
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white drop-shadow-sm">YOUR SKILLS</h2>
          <Card className="p-6">
            <div className="space-y-6">
              {Object.entries(stats.skills).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700 capitalize">{key.replace('_', ' ')}</span>
                    <span className="font-bold text-primary-600">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${value > 80 ? 'bg-primary-500' : value > 60 ? 'bg-secondary-500' : 'bg-orange-500'}`} 
                      style={{ width: `${value}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

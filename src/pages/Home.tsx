import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Brain, Target, Coins, Shield, Sparkles, TrendingUp, Database, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { isSupabaseConfigured, initSupabase, clearSupabaseConfig } from '../lib/supabase';
import { useAuthStore } from '../store/useAuthStore';

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const configured = isSupabaseConfigured();
  
  // If user is already logged in, they should usually see their dashboard.
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const [showConfig, setShowConfig] = useState(false);
  const [dbUrl, setDbUrl] = useState('');
  const [dbKey, setDbKey] = useState('');

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (initSupabase(dbUrl, dbKey)) {
      window.location.reload();
    }
  };

  const handleStart = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="space-y-20">
      {/* Configuration Warning for Prototype */}
      {!configured ? (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-xl">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-amber-900 text-lg">Prototype Mode Active</h3>
              <p className="text-sm mt-1 mb-3">
                You are currently running with local offline state. Connect your Supabase project to persist data and enable real authentication.
              </p>
              {!showConfig ? (
                <Button size="sm" variant="accent" onClick={() => setShowConfig(true)}>
                  <Database className="w-4 h-4 mr-2" /> Connect Supabase
                </Button>
              ) : (
                <form onSubmit={handleConnect} className="bg-white p-4 rounded-lg border border-amber-100 space-y-4 max-w-xl">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Project URL</label>
                    <input 
                      type="url" 
                      required 
                      value={dbUrl}
                      onChange={e => setDbUrl(e.target.value)}
                      placeholder="https://your-project.supabase.co" 
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Anon Public Key</label>
                    <input 
                      type="password" 
                      required 
                      value={dbKey}
                      onChange={e => setDbKey(e.target.value)}
                      placeholder="eyJhbG..." 
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" size="sm" variant="primary">Connect Database</Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => setShowConfig(false)}>Cancel</Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <span className="font-semibold">Connected to Supabase Database</span>
          </div>
          <Button size="sm" variant="ghost" onClick={clearSupabaseConfig} className="text-green-700 hover:bg-green-100">
            Disconnect
          </Button>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto pt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white border border-white/30 text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Train your brain. Think better. Solve real life.</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            TRAIN YOUR BRAIN.<br />
            <motion.span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 drop-shadow-sm"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              THINK BETTER.
            </motion.span><br />
            MASTER LIFE.
          </h1>
          
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            BRAINGYM helps children, teens, students and adults strengthen logical thinking, critical thinking, financial skills and real-life problem solving through adaptive challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="xl" onClick={handleStart} className="bg-yellow-400 text-red-900 hover:bg-yellow-300 shadow-xl shadow-yellow-500/30 font-bold border-none">
                START TRAINING
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="xl" variant="outline" onClick={handleStart} className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-bold backdrop-blur-sm">
                TRY TODAY'S CHALLENGE
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Daily Challenge Highlight */}
      <section>
        <Card className="bg-gradient-to-br from-dark to-gray-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Brain className="w-64 h-64" />
          </div>
          <div className="relative z-10 p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent-500 font-bold tracking-wider text-sm uppercase">
                <Target className="w-5 h-5" />
                Daily Brain Challenge
              </div>
              <h2 className="text-3xl font-bold">Can you solve today's challenge?</h2>
              <div className="flex gap-4 text-sm font-medium text-gray-300">
                <span className="flex items-center gap-1"><Sparkles className="w-4 h-4 text-accent-500" /> +50 XP Reward</span>
                <span>•</span>
                <span>Critical Thinking</span>
                <span>•</span>
                <span className="text-amber-400">Medium Difficulty</span>
              </div>
              <p className="text-gray-400">Complete today's challenge and keep your streak alive.</p>
            </div>
            <Button size="lg" variant="accent" onClick={handleStart}>
              START CHALLENGE
            </Button>
          </div>
        </Card>
      </section>

      {/* Why BrainGym? */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Why BRAINGYM?</h2>
          <p className="text-red-100 font-medium">Build stronger thinking skills through fun challenges.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="flex flex-col items-center text-center space-y-4 shadow-xl shadow-red-900/20 border-white/20">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">THINK</h3>
            <p className="text-gray-600">Build logical and critical thinking skills for everyday challenges.</p>
          </Card>
          
          <Card className="flex flex-col items-center text-center space-y-4 shadow-xl shadow-red-900/20 border-white/20">
            <div className="w-16 h-16 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
              <Coins className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">MONEY</h3>
            <p className="text-gray-600">Learn budgeting, saving and financial decision-making.</p>
          </Card>
          
          <Card className="flex flex-col items-center text-center space-y-4 shadow-xl shadow-red-900/20 border-white/20">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">IMPROVE</h3>
            <p className="text-gray-600">Track detailed skill development and build consistent learning habits.</p>
          </Card>
        </div>
      </section>
    </div>
  );
}

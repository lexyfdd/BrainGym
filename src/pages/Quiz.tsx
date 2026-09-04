import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Volume2, VolumeX, Lightbulb, CheckCircle2, XCircle, BrainCircuit } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function Quiz() {
  const navigate = useNavigate();
  const { currentQuestions, currentQuestionIndex, answerQuestion, nextQuestion } = useGameStore();
  
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const question = currentQuestions[currentQuestionIndex];

  useEffect(() => {
    // Stop audio when component unmounts or question changes
    window.speechSynthesis.cancel();
    setIsPlayingAudio(false);
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [currentQuestionIndex]);

  if (!question) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">No questions found for this category.</h2>
        <Button onClick={() => navigate('/categories')}>Go Back</Button>
      </div>
    );
  }

  const isCorrect = selectedOptionId ? question.options.find(o => o.id === selectedOptionId)?.isCorrect : false;

  const handleSpeak = () => {
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    if ('speechSynthesis' in window) {
      const textToSpeak = `${question.text}. Options are: ${question.options.map((o, idx) => `Option ${idx + 1}: ${o.text}`).join('. ')}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      
      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleOptionClick = (optionId: string) => {
    if (showFeedback) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    window.speechSynthesis.cancel();
    setIsPlayingAudio(false);
    setShowFeedback(true);
    answerQuestion(isCorrect || false, question.xpReward);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOptionId(null);
    setShowHint(false);
    
    if (currentQuestionIndex < currentQuestions.length - 1) {
      nextQuestion();
    } else {
      navigate('/score');
    }
  };

  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Header & Progress */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Question {currentQuestionIndex + 1} of {currentQuestions.length}
          </span>
          <div className="flex items-center gap-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              question.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
              question.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-700'
            }`}>
              {question.difficulty}
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary-500"
            initial={{ width: `${((currentQuestionIndex) / currentQuestions.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card className="p-8 md:p-10 shadow-sm border-gray-200">
        <div className="flex items-start justify-between mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-900">
            {question.text}
          </h2>
          <button 
            onClick={handleSpeak}
            className={`p-3 rounded-full transition-colors shrink-0 shadow-sm ${
              isPlayingAudio ? 'bg-primary-100 text-primary-600 animate-pulse' : 'bg-gray-100 text-primary-600 hover:bg-gray-200'
            }`} 
            title={isPlayingAudio ? "Stop Listening" : "Listen"}
          >
            {isPlayingAudio ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>

        <div className="grid gap-4 mb-8">
          {question.options.map((option) => (
            <motion.button
              key={option.id}
              whileHover={!showFeedback ? { scale: 1.01 } : {}}
              whileTap={!showFeedback ? { scale: 0.99 } : {}}
              onClick={() => handleOptionClick(option.id)}
              disabled={showFeedback}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                showFeedback 
                  ? option.isCorrect
                    ? 'border-green-500 bg-green-50 text-green-900'
                    : selectedOptionId === option.id
                      ? 'border-red-500 bg-red-50 text-red-900'
                      : 'border-gray-100 bg-white opacity-50 text-gray-900'
                  : selectedOptionId === option.id
                    ? 'border-primary-500 bg-primary-50 text-primary-900'
                    : 'border-gray-100 bg-white hover:border-primary-200 text-gray-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{option.text}</span>
                {showFeedback && option.isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                {showFeedback && !option.isCorrect && selectedOptionId === option.id && <XCircle className="w-6 h-6 text-red-500" />}
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!showFeedback ? (
            <motion.div 
              key="actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between pt-6 border-t border-gray-100"
            >
              {question.hint ? (
                <button 
                  onClick={() => setShowHint(true)}
                  className="flex items-center gap-2 text-gray-500 hover:text-amber-500 font-medium transition-colors"
                >
                  <Lightbulb className="w-5 h-5" />
                  {showHint ? question.hint : 'Need a hint?'}
                </button>
              ) : (
                <div />
              )}
              
              <Button size="lg" onClick={handleSubmit} disabled={!selectedOptionId}>
                Submit Answer
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                {isCorrect ? (
                  <>
                    <div className="p-2 bg-green-500 rounded-full text-white">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-900 text-xl">Correct!</h3>
                      <p className="text-green-700 font-medium">+{question.xpReward} XP</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2 bg-red-500 rounded-full text-white">
                      <XCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-red-900 text-xl">Good attempt!</h3>
                  </>
                )}
              </div>
              
              <div className="bg-white p-5 rounded-xl mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Why?</h4>
                <p className="text-gray-700">{question.explanation}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-primary-500" /> Thinking Tip
                  </h4>
                  <p className="text-gray-600 text-sm">{question.learningObjective}</p>
                </div>
              </div>
              
              <Button size="lg" className="w-full" onClick={handleNext}>
                {currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}

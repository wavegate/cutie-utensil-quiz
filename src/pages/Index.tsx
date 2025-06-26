
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChatBot from '@/components/ChatBot';
import Results from '@/components/Results';
import { Utensils, ChefHat, Heart } from 'lucide-react';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [quizResults, setQuizResults] = useState(null);

  const startQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleQuizComplete = (results: any) => {
    setQuizResults(results);
    setCurrentStep('results');
  };

  const restartQuiz = () => {
    setCurrentStep('welcome');
    setQuizResults(null);
  };

  if (currentStep === 'quiz') {
    return <ChatBot onComplete={handleQuizComplete} />;
  }

  if (currentStep === 'results' && quizResults) {
    return <Results results={quizResults} onRestart={restartQuiz} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto shadow-xl bg-white/90 backdrop-blur-sm border-2 border-orange-200">
        <CardContent className="p-8 text-center">
          <div className="mb-6 flex justify-center space-x-4">
            <div className="animate-bounce">
              <Utensils className="w-12 h-12 text-orange-500" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.1s' }}>
              <ChefHat className="w-12 h-12 text-red-500" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Heart className="w-12 h-12 text-pink-500" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
            🍴 Which Kitchen Utensil Are You? 🥄
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Welcome to the most delightful personality quiz in the kitchen! 
            I'm your friendly culinary companion, and I can't wait to discover 
            which amazing kitchen utensil matches your unique personality. 
            Are you a versatile spoon, a sharp knife, or perhaps a gentle whisk?
          </p>
          
          <div className="bg-orange-100 rounded-lg p-6 mb-8 border-2 border-orange-200">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">
              What You'll Discover:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-orange-700">
              <div className="flex items-center space-x-2">
                <span className="text-orange-500">✨</span>
                <span>Your kitchen utensil personality</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500">💕</span>
                <span>Compatible utensil friends</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500">🎯</span>
                <span>Your unique traits & strengths</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500">🌟</span>
                <span>Fun personality insights</span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={startQuiz}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            Start My Culinary Journey! 🚀
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Takes about 3-5 minutes • 10 fun questions
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;

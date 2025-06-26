import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RefreshCw, Heart, Users, Sparkles, Target } from 'lucide-react';
import { QuizResult } from '@/lib/api';

interface ResultsProps {
  results: QuizResult;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ results, onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Main Result */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="text-6xl mb-4 animate-bounce">
              {results.emoji}
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
              You are a {results.utensil}!
            </CardTitle>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {results.description}
            </p>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personality Traits */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-xl">
                <Sparkles className="text-yellow-500" size={20} />
                <span>Your Traits</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.traits.map((trait, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-orange-500">✨</span>
                    <span className="text-gray-700">{trait}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-xl">
                <Target className="text-green-500" size={20} />
                <span>Your Strengths</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">💪</span>
                    <span className="text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compatible Utensils */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl">
              <Heart className="text-pink-500" size={20} />
              <span>Your Perfect Kitchen Companions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {results.compatibility.map((utensil, index) => (
                <div key={index} className="bg-pink-50 rounded-lg p-4 border-2 border-pink-200 text-center">
                  <div className="text-3xl mb-2">{utensil.emoji}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{utensil.name}</h4>
                  <p className="text-sm text-gray-600">{utensil.reason}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Personality Insights */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl">
              <Users className="text-blue-500" size={20} />
              <span>Personality Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.personality_insights.map((insight, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-gray-700">{insight}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200">
          <CardHeader>
            <CardTitle className="text-xl">🎉 Fun Facts About You</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.fun_facts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-3 bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                  <span className="text-yellow-500 text-lg">🌟</span>
                  <span className="text-gray-700 text-sm">{fact}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Share & Restart */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Share your result or take the quiz again!
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const text = `I just discovered I'm a ${results.utensil} ${results.emoji}! What kitchen utensil are you?`;
                  if (navigator.share) {
                    navigator.share({ text });
                  } else {
                    navigator.clipboard.writeText(text);
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              >
                Share Result 📤
              </Button>
              <Button
                onClick={onRestart}
                variant="outline"
                className="border-2 border-orange-300 hover:bg-orange-50"
              >
                <RefreshCw size={16} className="mr-2" />
                Take Quiz Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;

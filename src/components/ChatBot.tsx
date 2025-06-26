
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, calculateResult } from '@/utils/quizLogic';
import { Bot, User } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  onComplete: (results: any) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onComplete }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Start with a welcome message
    const welcomeMessage = {
      type: 'bot' as const,
      content: "Hi there! I'm so excited to help you discover your kitchen utensil personality! 🌟 Let's start with some fun questions. Ready?",
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    
    // Ask first question after a short delay
    setTimeout(() => {
      askQuestion(0);
    }, 1500);
  }, []);

  const typeMessage = (content: string, callback?: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        type: 'bot',
        content,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
      if (callback) callback();
    }, 1000 + Math.random() * 1000); // Random typing delay for naturalness
  };

  const askQuestion = (questionIndex: number) => {
    if (questionIndex >= quizQuestions.length) {
      // Quiz complete
      const results = calculateResult(answers);
      typeMessage("Wonderful! Let me analyze your answers and reveal your kitchen utensil personality... ✨", () => {
        setTimeout(() => onComplete(results), 2000);
      });
      return;
    }

    const question = quizQuestions[questionIndex];
    typeMessage(question.question);
  };

  const handleAnswer = (answerKey: string, answerText: string) => {
    // Add user's answer to messages
    const userMessage: Message = {
      type: 'user',
      content: answerText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Store the answer
    const currentQuestion = quizQuestions[currentQuestionIndex];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerKey
    }));

    // Move to next question
    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);

    // Ask next question after a short delay
    setTimeout(() => {
      askQuestion(nextIndex);
    }, 1500);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <Card className="mb-6 bg-white/90 backdrop-blur-sm border-2 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Quiz Progress</span>
              <span className="text-sm text-gray-500">{currentQuestionIndex}/{quizQuestions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Chat Messages */}
        <Card className="mb-6 bg-white/90 backdrop-blur-sm border-2 border-orange-200">
          <CardContent className="p-6">
            <div className="h-96 overflow-y-auto space-y-4 mb-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  } animate-fade-in`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'bot' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-3 rounded-2xl max-w-xs md:max-w-md ${
                      message.type === 'bot'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-500 text-white'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start space-x-3 animate-fade-in">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block p-3 rounded-2xl bg-gray-100">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Answer Options */}
            {currentQuestion && !isTyping && currentQuestionIndex < quizQuestions.length && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-3">Choose your answer:</p>
                {currentQuestion.options.map((option) => (
                  <Button
                    key={option.key}
                    onClick={() => handleAnswer(option.key, option.text)}
                    variant="outline"
                    className="w-full text-left justify-start p-4 h-auto hover:bg-orange-50 hover:border-orange-300 transition-all duration-200"
                  >
                    <span className="text-sm">{option.text}</span>
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatBot;

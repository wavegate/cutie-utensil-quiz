const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface QuizSubmission {
  answers: Record<string, string>;
}

export interface QuizResult {
  utensil: string;
  emoji: string;
  description: string;
  traits: string[];
  strengths: string[];
  compatibility: Array<{
    name: string;
    emoji: string;
    reason: string;
  }>;
  personality_insights: string[];
  fun_facts: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: Array<{
    key: string;
    text: string;
    traits: string[];
  }>;
}

export const getQuizQuestions = async (): Promise<QuizQuestion[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/quiz/questions`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const questions = await response.json();
    return questions;
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    throw error;
  }
};

export const submitQuiz = async (answers: Record<string, string>): Promise<QuizResult> => {
  try {
    const response = await fetch(`${API_BASE_URL}/quiz/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting quiz:', error);
    throw error;
  }
}; 
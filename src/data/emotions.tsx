import React from 'react';
import { Heart, Cloud, Sun, Moon, Sparkles, Coffee, CloudRain } from 'lucide-react';
import type { Emotion } from '../types';

export const emotions: Emotion[] = [
  {
    name: 'Love',
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    bgColor: 'bg-rose-100 text-rose-700',
    prompt: 'Hey Naledi, what makes your heart smile today? Share a moment that filled you with love...',
  },
  {
    name: 'Peaceful',
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    bgColor: 'bg-blue-100 text-blue-700',
    prompt: 'Take a deep breath, Naledi. What brings you peace in this moment?',
  },
  {
    name: 'Joy',
    icon: <Sun className="w-6 h-6 text-amber-500" />,
    bgColor: 'bg-amber-100 text-amber-700',
    prompt: "What brightened your day, Naledi? Let's celebrate your happiness...",
  },
  {
    name: 'Reflective',
    icon: <Moon className="w-6 h-6 text-indigo-500" />,
    bgColor: 'bg-indigo-100 text-indigo-700',
    prompt: "What's on your beautiful mind, Naledi? Take your time to explore your thoughts...",
  },
  {
    name: 'Grateful',
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    bgColor: 'bg-purple-100 text-purple-700',
    prompt: 'Naledi, what fills your heart with gratitude today? Big or small...',
  },
  {
    name: 'Energized',
    icon: <Coffee className="w-6 h-6 text-orange-500" />,
    bgColor: 'bg-orange-100 text-orange-700',
    prompt: "What's inspiring you right now, Naledi? Share your excitement...",
  },
  {
    name: 'Sadness',
    icon: <CloudRain className="w-6 h-6 text-slate-500" />,
    bgColor: 'bg-slate-100 text-slate-700',
    prompt: "It's okay to feel down, Naledi. Your feelings are valid. What's weighing on your heart?",
  },
];
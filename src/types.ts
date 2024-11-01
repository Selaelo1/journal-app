import { ReactNode } from 'react';

export interface Emotion {
  name: string;
  icon: ReactNode;
  bgColor: string;
  prompt: string;
}

export interface Entry {
  id: number;
  emotion: Emotion;
  content: string;
  date: string;
}
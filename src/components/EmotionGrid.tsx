import React from 'react';
import { emotions } from '../data/emotions';
import type { Emotion } from '../types';

interface EmotionGridProps {
  onSelectEmotion: (emotion: Emotion) => void;
}

export function EmotionGrid({ onSelectEmotion }: EmotionGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {emotions.map((emotion) => (
        <button
          key={emotion.name}
          onClick={() => onSelectEmotion(emotion)}
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-center"
        >
          <div className="flex flex-col items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${emotion.bgColor}`}>
              {emotion.icon}
            </div>
            <h3 className="font-medium text-gray-800">{emotion.name}</h3>
          </div>
        </button>
      ))}
    </div>
  );
}
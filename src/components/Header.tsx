import React from 'react';
import { BookHeart, Menu, Sparkles } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="text-center mb-12 relative">
      <button 
        onClick={toggleSidebar}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-gray-800"
      >
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles className="w-8 h-8 text-rose-500" />
        <h1 className="text-3xl font-bold text-gray-800">Naledi's Journal</h1>
        <BookHeart className="w-8 h-8 text-rose-500" />
      </div>
      <p className="text-gray-600">Your personal space to express, reflect, and grow</p>
    </header>
  );
}
import React, { useRef, useEffect } from 'react';
import { Flame, X } from 'lucide-react';
import type { Entry } from '../types';

interface EntriesSidebarProps {
  entries: Entry[];
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: number) => void;
}

export function EntriesSidebar({ entries, isOpen, onClose, onDelete }: EntriesSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div 
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-rose-50 to-pink-50">
          <h2 className="text-xl font-semibold text-gray-800">Your Journey</h2>
          <button onClick={onClose} className="p-2 text-gray-600 hover:text-gray-800">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {entries.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 italic">Your journal is ready for your first entry</p>
              <p className="text-sm text-rose-400 mt-2">✨ Begin your journey, mama ✨</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${entry.emotion.bgColor}`}>
                    {entry.emotion.icon}
                    <span className="font-medium">{entry.emotion.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {new Date(entry.date).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => onDelete(entry.id)}
                      className="text-gray-400 hover:text-rose-500 transition-colors"
                      title="Burn this memory"
                    >
                      <Flame className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap text-sm">{entry.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
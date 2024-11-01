import React from 'react';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import type { Emotion } from '../types';

interface EntryEditorProps {
  selectedEmotion: Emotion | null;
  currentEntry: string;
  onEntryChange: (value: string) => void;
  onSave: () => void;
  onReset: () => void;
}

export function EntryEditor({ selectedEmotion, currentEntry, onEntryChange, onSave, onReset }: EntryEditorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <button
        onClick={onReset}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      
      {selectedEmotion && (
        <div className="mb-6">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${selectedEmotion.bgColor} mb-4`}>
            {selectedEmotion.icon}
            <span className="font-medium">{selectedEmotion.name}</span>
          </div>
          <p className="text-gray-600 italic">{selectedEmotion.prompt}</p>
        </div>
      )}

      <textarea
        value={currentEntry}
        onChange={(e) => onEntryChange(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-full h-48 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none resize-none"
      />

      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={onReset}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2"
        >
          <Trash2 className="w-4 h-4" /> Discard
        </button>
        <button
          onClick={onSave}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> Save Entry
        </button>
      </div>
    </div>
  );
}
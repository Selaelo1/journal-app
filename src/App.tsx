import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EmotionGrid } from './components/EmotionGrid';
import { EntryEditor } from './components/EntryEditor';
import { EntriesSidebar } from './components/EntriesSidebar';
import type { Entry, Emotion } from './types';

function App() {
  const [entries, setEntries] = useState<Entry[]>(() => {
    const saved = localStorage.getItem('journal-entries');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [currentEntry, setCurrentEntry] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('journal-entries', JSON.stringify(entries));
  }, [entries]);

  const handleSave = () => {
    if (selectedEmotion && currentEntry.trim()) {
      setEntries([
        ...entries,
        {
          id: Date.now(),
          emotion: selectedEmotion,
          content: currentEntry,
          date: new Date().toISOString(),
        },
      ]);
      handleReset();
    }
  };

  const handleDelete = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleReset = () => {
    setSelectedEmotion(null);
    setCurrentEntry('');
    setIsWriting(false);
  };

  const handleSelectEmotion = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
    setIsWriting(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header toggleSidebar={() => setIsSidebarOpen(true)} />

        {!isWriting ? (
          <EmotionGrid onSelectEmotion={handleSelectEmotion} />
        ) : (
          <EntryEditor
            selectedEmotion={selectedEmotion}
            currentEntry={currentEntry}
            onEntryChange={setCurrentEntry}
            onSave={handleSave}
            onReset={handleReset}
          />
        )}
      </div>

      <EntriesSidebar
        entries={entries}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
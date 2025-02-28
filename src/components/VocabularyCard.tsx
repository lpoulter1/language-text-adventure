'use client';

import { useState } from 'react';
import AudioButton from './AudioButton';

interface VocabularyCardProps {
  italian: string;
  english: string;
  isNew?: boolean;
}

export const VocabularyCard = ({
  italian,
  english,
  isNew = false,
}: VocabularyCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-full h-24 cursor-pointer group perspective ${
        isNew ? 'animate-pulse' : ''
      }`}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-lg border-2 border-neon-blue bg-cyber-black/90 p-4 flex items-center justify-center shadow-neon-blue">
          <div className="flex items-center">
            <p className="text-xl font-display text-center vocab-italian">
              {italian}
            </p>
            <AudioButton text={italian} className="ml-2" />
          </div>
          {isNew && (
            <span className="absolute top-2 right-2 bg-neon-pink text-white text-xs px-2 py-1 rounded-full shadow-neon-pink font-semibold">
              Nuovo!
            </span>
          )}
          <button
            onClick={() => setFlipped(!flipped)}
            className="absolute bottom-2 right-2 text-xs text-neon-blue hover:text-neon-pink transition-colors"
          >
            {flipped ? 'Italiano' : 'English'}
          </button>
        </div>
        <div className="absolute w-full h-full backface-hidden rounded-lg border-2 border-neon-pink bg-cyber-black/90 p-4 flex items-center justify-center rotate-y-180 shadow-neon-pink">
          <p className="text-xl text-center vocab-english">{english}</p>
          <button
            onClick={() => setFlipped(!flipped)}
            className="absolute bottom-2 right-2 text-xs text-neon-pink hover:text-neon-blue transition-colors"
          >
            {flipped ? 'Italiano' : 'English'}
          </button>
        </div>
      </div>
    </div>
  );
};

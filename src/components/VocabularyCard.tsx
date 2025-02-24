import { useState } from "react";

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
        isNew ? "animate-pulse" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-lg border-2 border-neon-blue bg-cyber-black/90 p-4 flex items-center justify-center shadow-neon-blue">
          <p className="text-xl font-display text-center vocab-italian">
            {italian}
          </p>
          {isNew && (
            <span className="absolute top-2 right-2 bg-neon-pink text-white text-xs px-2 py-1 rounded-full shadow-neon-pink font-semibold">
              Nuovo!
            </span>
          )}
        </div>
        <div className="absolute w-full h-full backface-hidden rounded-lg border-2 border-neon-pink bg-cyber-black/90 p-4 flex items-center justify-center rotate-y-180 shadow-neon-pink">
          <p className="text-xl text-center vocab-english">{english}</p>
        </div>
      </div>
    </div>
  );
};

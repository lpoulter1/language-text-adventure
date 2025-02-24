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
        <div className="absolute w-full h-full backface-hidden rounded-lg border-2 border-italian-green bg-white p-4 flex items-center justify-center">
          <p className="text-xl font-display text-center">{italian}</p>
          {isNew && (
            <span className="absolute top-2 right-2 bg-italian-red text-white text-xs px-2 py-1 rounded-full">
              Nuovo!
            </span>
          )}
        </div>
        <div className="absolute w-full h-full backface-hidden rounded-lg border-2 border-pasta bg-white p-4 flex items-center justify-center rotate-y-180">
          <p className="text-xl text-center">{english}</p>
        </div>
      </div>
    </div>
  );
};

'use client';

import React from 'react';

interface VocabularyItem {
  italian: string;
  english: string;
}

interface CompletionScreenProps {
  onContinue: () => void;
  onReset: () => void;
  visitedScenesCount: number;
  totalScenes: number;
  learnedVocabulary: VocabularyItem[];
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({
  onContinue,
  onReset,
  visitedScenesCount,
  totalScenes,
  learnedVocabulary,
}) => {
  const progressPercentage = Math.round(
    (visitedScenesCount / totalScenes) * 100
  );

  return (
    <div className="bg-cyber-black min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-neon-pink/80 via-neon-blue/80 to-neon-purple/80 h-2"></div>

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto bg-cyber-black/80 rounded-lg p-6 shadow-neon-purple">
          <h1 className="text-4xl font-display text-center mb-6 neon-text">
            Avventura Completata!
          </h1>

          <p className="text-brighton-white mb-6 text-center">
            Congratulazioni! Hai completato questa parte dell'avventura di Larry
            a Roma. Hai imparato nuovo vocabolario italiano e hai vissuto
            un'esperienza unica.
          </p>

          <div className="mb-6 bg-neon-blue/10 border border-neon-blue rounded-lg p-4">
            <h2 className="text-xl font-display mb-2 text-neon-blue">
              Il tuo progresso
            </h2>
            <div className="flex items-center mb-2">
              <div className="w-full h-4 bg-cyber-black border border-neon-blue rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className="ml-2 text-brighton-white">
                {progressPercentage}%
              </span>
            </div>
            <p className="text-brighton-white">
              Hai visitato {visitedScenesCount} scene su {totalScenes} totali.
            </p>
          </div>

          <div className="mb-6 bg-neon-pink/10 border border-neon-pink rounded-lg p-4">
            <h2 className="text-xl font-display mb-2 text-neon-pink">
              Vocabolario imparato
            </h2>
            <p className="text-brighton-white mb-2">
              Hai imparato {learnedVocabulary.length} nuove parole italiane:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {learnedVocabulary.map(item => (
                <div
                  key={item.italian}
                  className="bg-cyber-black/50 p-2 rounded border border-neon-blue"
                >
                  <span className="text-neon-blue">{item.italian}</span>
                  {' - '}
                  <span className="text-brighton-white">{item.english}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button onClick={onContinue} className="btn-primary relative">
              <span>Continua l'avventura</span>
            </button>
            <button onClick={onReset} className="btn-danger relative">
              <span>Ricomincia da capo</span>
            </button>
          </div>

          <p className="text-neon-blue text-center mt-6 text-sm">
            Continua a esplorare Roma e migliorare il tuo italiano!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;

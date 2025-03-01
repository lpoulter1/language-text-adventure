'use client';

import React from 'react';

export interface CompletionScreenProps {
  visitedScenesCount: number;
  totalScenes: number;
  learnedVocabulary: Array<{ italian: string; english: string }>;
  onReset: () => void;
  onContinue: () => void;
  onBackToStories: () => void;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({
  visitedScenesCount,
  totalScenes,
  learnedVocabulary,
  onReset,
  onContinue,
  onBackToStories,
}) => {
  const percentageCompleted = Math.floor(
    (visitedScenesCount / totalScenes) * 100
  );

  return (
    <div className="min-h-screen bg-cyber-black grid-bg flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-cyber-dark p-8 rounded-lg border-2 border-neon-pink shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center neon-text">
          Complimenti!
        </h1>
        <p className="text-white text-lg mb-6 text-center">
          Hai fatto un ottimo progresso nel tuo viaggio italiano!
        </p>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-neon-blue">Progresso</span>
            <span className="text-neon-pink">{percentageCompleted}%</span>
          </div>
          <div className="w-full bg-cyber-black rounded-full h-4 border border-neon-blue">
            <div
              className="bg-gradient-to-r from-neon-blue to-neon-pink h-full rounded-full"
              style={{ width: `${percentageCompleted}%` }}
            ></div>
          </div>
          <div className="text-white text-sm mt-1">
            Hai visitato {visitedScenesCount} di {totalScenes} scene
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-neon-blue">
            Vocabolario imparato
          </h2>
          <div className="max-h-60 overflow-y-auto bg-cyber-black p-3 rounded-lg border border-neon-blue">
            {learnedVocabulary.length > 0 ? (
              <table className="w-full text-sm">
                <thead className="text-neon-pink">
                  <tr>
                    <th className="text-left p-1">Italiano</th>
                    <th className="text-left p-1">English</th>
                  </tr>
                </thead>
                <tbody>
                  {learnedVocabulary.map((word, index) => (
                    <tr
                      key={index}
                      className="border-b border-neon-blue/30 last:border-0"
                    >
                      <td className="text-neon-yellow p-1">{word.italian}</td>
                      <td className="text-white p-1">{word.english}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-neon-yellow">
                Non hai ancora imparato nuove parole.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onContinue}
            className="btn-primary text-white font-bold py-2 px-6 rounded-md"
          >
            Continua l&apos;avventura
          </button>
          <button
            onClick={onReset}
            className="btn-secondary text-white font-bold py-2 px-6 rounded-md"
          >
            Ricomincia
          </button>
          <button
            onClick={onBackToStories}
            className="btn-accent text-white font-bold py-2 px-6 rounded-md"
          >
            Torna alle storie
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;

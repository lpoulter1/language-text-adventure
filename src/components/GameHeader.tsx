'use client';

import React from 'react';

interface GameHeaderProps {
  onReset: () => void;
  visitedScenesCount: number;
  totalScenes: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({
  onReset,
  visitedScenesCount,
  totalScenes,
}) => {
  const progressPercentage = Math.round(
    (visitedScenesCount / totalScenes) * 100
  );

  return (
    <header className="p-4 mb-4 rounded-lg bg-cyber-black shadow-neon-purple">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h1
              className="mb-1 text-3xl text-white font-cyber neon-text cyber-heading"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              LARRY'S ITALIAN ADVENTURE
            </h1>
            <p className="text-brighton-white opacity-90">
              Un'avventura calcistica a Roma
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="mb-2">
              <span
                className="mr-2 text-neon-purple font-cyber cyber-heading"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                PROGRESSO: {progressPercentage}%
              </span>
              <div className="w-48 h-3 overflow-hidden border rounded-full bg-cyber-black border-neon-blue">
                <div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={onReset}
              className="relative z-10 text-sm btn-danger"
            >
              <span className="button-text">RICOMINCIA</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;

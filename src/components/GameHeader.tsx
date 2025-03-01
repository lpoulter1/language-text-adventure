'use client';

import React from 'react';

export interface GameHeaderProps {
  onReset: () => void;
  visitedScenesCount: number;
  totalScenes: number;
  storyTitle: string;
  onBackToStories: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({
  onReset,
  visitedScenesCount,
  totalScenes,
  storyTitle,
  onBackToStories,
}) => {
  const progressPercentage = Math.round(
    (visitedScenesCount / totalScenes) * 100
  );

  return (
    <header className="bg-cyber-black sticky top-0 z-10 border-b-2 border-neon-blue shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-2 sm:mb-0">
            <h1 className="text-2xl font-bold neon-text">{storyTitle}</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="flex items-center">
                <div className="w-32 h-3 bg-cyber-dark rounded-full overflow-hidden mr-2">
                  <div
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <span className="text-white text-sm">
                  {visitedScenesCount}/{totalScenes} scene
                </span>
              </div>
            </div>

            <button
              onClick={onBackToStories}
              className="px-3 py-1 text-sm bg-neon-blue text-white rounded hover:bg-neon-blue-bright transition-colors duration-200"
            >
              Cambia Storia
            </button>

            <button
              onClick={onReset}
              className="px-3 py-1 text-sm bg-neon-pink text-white rounded hover:bg-neon-pink-bright transition-colors duration-200"
            >
              Ricomincia
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;

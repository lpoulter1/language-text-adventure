"use client";

import React from "react";

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
    <header className="bg-cyber-black shadow-neon-purple p-4 mb-4 rounded-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-cyber text-white neon-text mb-1 cyber-heading">
              LARRY'S ITALIAN ADVENTURE
            </h1>
            <p className="text-brighton-white opacity-90">
              Un'avventura calcistica a Roma
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="mb-2">
              <span className="text-neon-purple mr-2 font-cyber cyber-heading">
                PROGRESSO: {progressPercentage}%
              </span>
              <div className="w-48 h-3 bg-cyber-black border border-neon-blue rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={onReset}
              className="btn-danger text-sm relative z-10"
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

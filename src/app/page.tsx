'use client';

import { useEffect, useState } from 'react';
import { useGameState } from '../hooks/useGameState';
import SceneDisplay from '../components/SceneDisplay';
import { PlayerStatus } from '../components/PlayerStatus';
import GameHeader from '../components/GameHeader';
import WelcomeScreen from '../components/WelcomeScreen';
import CompletionScreen from '../components/CompletionScreen';
import { scenes } from '../data/gameData';

export default function Home() {
  const { gameState, currentScene, makeChoice, resetGame, hasItem } =
    useGameState();
  const isClient = typeof window !== 'undefined';

  // Add a state to track whether we're on the client
  const [mounted, setMounted] = useState(false);

  // Use the useEffect to set mounted to true
  useEffect(() => {
    setMounted(true);
  }, []);

  const [showWelcome, setShowWelcome] = useState(() => {
    // With 'use client', we're always on the client, but keeping the check for clarity
    if (isClient) {
      return !localStorage.getItem('italianAdventureVisited');
    }
    return true;
  });
  const [showCompletion, setShowCompletion] = useState(false);

  // Check if player has visited enough scenes to show completion screen
  const uniqueVisitedScenes = new Set(gameState.visitedScenes);
  const completionThreshold = Math.floor(scenes.length * 0.7); // 70% of scenes

  useEffect(() => {
    if (!showWelcome && isClient) {
      localStorage.setItem('italianAdventureVisited', 'true');
    }
  }, [showWelcome, isClient]);

  // Check if player has reached completion threshold
  useEffect(() => {
    if (
      uniqueVisitedScenes.size >= completionThreshold &&
      !showCompletion &&
      !showWelcome &&
      isClient
    ) {
      // Only show completion screen if player has visited enough scenes
      const hasSeenCompletion = localStorage.getItem(
        'italianAdventureCompletionSeen'
      );
      if (!hasSeenCompletion) {
        setShowCompletion(true);
        localStorage.setItem('italianAdventureCompletionSeen', 'true');
      }
    }
  }, [
    gameState.visitedScenes,
    completionThreshold,
    showCompletion,
    showWelcome,
    isClient,
    uniqueVisitedScenes.size,
  ]);

  const handleReset = () => {
    resetGame();
    setShowWelcome(true);
    if (isClient) {
      localStorage.removeItem('italianAdventureCompletionSeen');
    }
  };

  // Only render the UI once we're on the client to avoid hydration issues
  if (!mounted) {
    return <div className="p-8 text-center">Caricamento...</div>;
  }

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onStart={() => setShowWelcome(false)} />
      ) : showCompletion ? (
        <CompletionScreen
          visitedScenesCount={uniqueVisitedScenes.size}
          learnedVocabulary={gameState.learnedVocabulary}
          totalScenes={scenes.length}
          onReset={handleReset}
          onContinue={() => setShowCompletion(false)}
        />
      ) : !currentScene ? (
        <div className="p-8 text-center">Caricamento...</div>
      ) : (
        <div className="min-h-screen bg-cyber-black grid-bg">
          <GameHeader
            onReset={handleReset}
            visitedScenesCount={uniqueVisitedScenes.size}
            totalScenes={scenes.length}
          />

          <main className="grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 mx-auto lg:grid-cols-3">
            <div className="col-span-2">
              <SceneDisplay
                scene={currentScene}
                onMakeChoice={makeChoice}
                hasItem={hasItem}
                visitedScenes={gameState.visitedScenes}
              />
            </div>

            <div>
              <PlayerStatus gameState={gameState} />
            </div>
          </main>

          <footer className="py-4 mt-8 border-t-2 bg-cyber-black border-neon-purple">
            <div className="max-w-6xl px-4 mx-auto text-sm text-center">
              <p className="neon-text">
                Larry's Italian Adventure - Un gioco per imparare l'italiano
                (A1-A2)
              </p>
              <p className="mt-1 neon-text-blue">Forza Brighton! 🔵⚪</p>
              <p className="mt-2">
                <span className="inline-block w-8 h-2 mr-1 bg-neon-pink shadow-neon-pink"></span>
                <span className="inline-block w-8 h-2 mr-1 bg-neon-blue shadow-neon-blue"></span>
                <span className="inline-block w-8 h-2 bg-neon-purple shadow-neon-purple"></span>
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

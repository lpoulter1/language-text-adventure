'use client';

import { useEffect, useState } from 'react';
import { useGameState } from '../hooks/useGameState';
import SceneDisplay from '../components/SceneDisplay';
import { PlayerStatus } from '../components/PlayerStatus';
import GameHeader from '../components/GameHeader';
import WelcomeScreen from '../components/WelcomeScreen';
import CompletionScreen from '../components/CompletionScreen';
import StorySelector from '../components/StorySelector';
import { allStories } from '../data/gameData';

export default function Home() {
  // Add a state to track whether we're on the client
  const [mounted, setMounted] = useState(false);
  const [storySelected, setStorySelected] = useState<boolean>(false);
  const [selectedStoryId, setSelectedStoryId] = useState<string | undefined>(
    undefined
  );

  // Use the useEffect to set mounted to true
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize game state with the selected story (if any)
  const {
    gameState,
    currentScene,
    currentStory,
    makeChoice,
    resetGame,
    switchStory,
    hasItem,
  } = useGameState({ initialStoryId: selectedStoryId });

  const isClient = typeof window !== 'undefined';

  const [showWelcome, setShowWelcome] = useState(() => {
    // With 'use client', we're always on the client, but keeping the check for clarity
    if (isClient && storySelected) {
      return !localStorage.getItem(
        `italianAdventureVisited_${currentStory.id}`
      );
    }
    return storySelected;
  });

  const [showCompletion, setShowCompletion] = useState(false);

  // Check if player has visited enough scenes to show completion screen
  const uniqueVisitedScenes = new Set(gameState.visitedScenes);
  const completionThreshold = Math.floor(currentStory.scenes.length * 0.7); // 70% of scenes

  useEffect(() => {
    if (!showWelcome && isClient && storySelected) {
      localStorage.setItem(
        `italianAdventureVisited_${currentStory.id}`,
        'true'
      );
    }
  }, [showWelcome, isClient, storySelected, currentStory.id]);

  // Check if player has reached completion threshold
  useEffect(() => {
    if (
      uniqueVisitedScenes.size >= completionThreshold &&
      !showCompletion &&
      !showWelcome &&
      isClient &&
      storySelected
    ) {
      // Only show completion screen if player has visited enough scenes
      const hasSeenCompletion = localStorage.getItem(
        `italianAdventureCompletionSeen_${currentStory.id}`
      );
      if (!hasSeenCompletion) {
        setShowCompletion(true);
        localStorage.setItem(
          `italianAdventureCompletionSeen_${currentStory.id}`,
          'true'
        );
      }
    }
  }, [
    gameState.visitedScenes,
    completionThreshold,
    showCompletion,
    showWelcome,
    isClient,
    storySelected,
    currentStory.id,
    uniqueVisitedScenes.size,
  ]);

  const handleReset = () => {
    resetGame();
    setShowWelcome(true);
    if (isClient) {
      localStorage.removeItem(
        `italianAdventureCompletionSeen_${currentStory.id}`
      );
    }
  };

  const handleSelectStory = (storyId: string) => {
    setSelectedStoryId(storyId);
    setStorySelected(true);
    switchStory(storyId);
  };

  const handleBackToStories = () => {
    setStorySelected(false);
    setSelectedStoryId(undefined);
  };

  // Only render the UI once we're on the client to avoid hydration issues
  if (!mounted) {
    return <div className="p-8 text-center">Caricamento...</div>;
  }

  if (!storySelected) {
    return (
      <StorySelector stories={allStories} onSelectStory={handleSelectStory} />
    );
  }

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen
          onStart={() => setShowWelcome(false)}
          storyTitle={currentStory.title}
        />
      ) : showCompletion ? (
        <CompletionScreen
          visitedScenesCount={uniqueVisitedScenes.size}
          learnedVocabulary={gameState.learnedVocabulary}
          totalScenes={currentStory.scenes.length}
          onReset={handleReset}
          onContinue={() => setShowCompletion(false)}
          onBackToStories={handleBackToStories}
        />
      ) : !currentScene ? (
        <div className="p-8 text-center">Caricamento...</div>
      ) : (
        <div className="min-h-screen bg-cyber-black grid-bg">
          <GameHeader
            onReset={handleReset}
            visitedScenesCount={uniqueVisitedScenes.size}
            totalScenes={currentStory.scenes.length}
            storyTitle={currentStory.title}
            onBackToStories={handleBackToStories}
          />

          <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2">
              <SceneDisplay
                scene={currentScene}
                onMakeChoice={makeChoice}
                hasItem={hasItem}
                visitedScenes={gameState.visitedScenes}
              />
            </div>

            <div className="col-span-1">
              <PlayerStatus gameState={gameState} />
            </div>
          </main>

          <footer className="bg-cyber-black py-4 mt-8 border-t-2 border-neon-purple">
            <div className="max-w-6xl mx-auto px-4 text-center text-sm">
              <p className="neon-text">
                {currentStory.title} - {currentStory.description}
              </p>
              <p className="mt-1 neon-text-blue">
                {currentStory.id === 'larry-adventure'
                  ? 'Forza Brighton! 🔵⚪'
                  : 'Benvenuto a Roma! 🇮🇹'}
              </p>
              <p className="mt-2">
                <span className="inline-block w-8 h-2 bg-neon-pink mr-1 shadow-neon-pink"></span>
                <span className="inline-block w-8 h-2 bg-neon-blue mr-1 shadow-neon-blue"></span>
                <span className="inline-block w-8 h-2 bg-neon-purple shadow-neon-purple"></span>
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

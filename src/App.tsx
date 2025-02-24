import { useEffect, useState } from "react";
import { useGameState } from "./hooks/useGameState";
import { SceneDisplay } from "./components/SceneDisplay";
import { PlayerStatus } from "./components/PlayerStatus";
import { GameHeader } from "./components/GameHeader";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { CompletionScreen } from "./components/CompletionScreen";
import { scenes } from "./data/gameData";

function App() {
  const { gameState, currentScene, makeChoice, resetGame, hasItem } =
    useGameState();
  const [showWelcome, setShowWelcome] = useState(() => {
    return !localStorage.getItem("italianAdventureVisited");
  });
  const [showCompletion, setShowCompletion] = useState(false);

  // Check if player has visited enough scenes to show completion screen
  const uniqueVisitedScenes = new Set(gameState.visitedScenes);
  const completionThreshold = Math.floor(scenes.length * 0.7); // 70% of scenes

  useEffect(() => {
    if (!showWelcome) {
      localStorage.setItem("italianAdventureVisited", "true");
    }
  }, [showWelcome]);

  // Check if player has reached completion threshold
  useEffect(() => {
    if (
      uniqueVisitedScenes.size >= completionThreshold &&
      !showCompletion &&
      !showWelcome
    ) {
      // Only show completion screen if player has visited enough scenes
      const hasSeenCompletion = localStorage.getItem(
        "italianAdventureCompletionSeen"
      );
      if (!hasSeenCompletion) {
        setShowCompletion(true);
        localStorage.setItem("italianAdventureCompletionSeen", "true");
      }
    }
  }, [
    gameState.visitedScenes,
    completionThreshold,
    showCompletion,
    showWelcome,
  ]);

  // Create placeholder images for development - intentionally unused in production
  useEffect(() => {
    // This is a placeholder for future image generation functionality
    // No implementation needed at this time as we're using pre-generated images
  }, []);

  const handleReset = () => {
    resetGame();
    setShowWelcome(true);
    localStorage.removeItem("italianAdventureCompletionSeen");
  };

  if (showWelcome) {
    return <WelcomeScreen onStart={() => setShowWelcome(false)} />;
  }

  if (showCompletion) {
    return (
      <CompletionScreen
        gameState={gameState}
        totalScenes={scenes.length}
        onReset={handleReset}
        onContinue={() => setShowCompletion(false)}
      />
    );
  }

  if (!currentScene) {
    return <div className="p-8 text-center">Caricamento...</div>;
  }

  return (
    <div className="min-h-screen bg-italian-white">
      <GameHeader
        onReset={handleReset}
        visitedScenesCount={uniqueVisitedScenes.size}
        totalScenes={scenes.length}
      />

      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
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

      <footer className="bg-white py-4 mt-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
          <p>Avventura Italiana - Un gioco per imparare l'italiano (A1-A2)</p>
          <p className="mt-2">
            <span className="inline-block w-8 h-2 bg-italian-green mr-1"></span>
            <span className="inline-block w-8 h-2 bg-italian-white mr-1 border border-gray-200"></span>
            <span className="inline-block w-8 h-2 bg-italian-red"></span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

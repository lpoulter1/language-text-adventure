import { useState, useEffect } from "react";
import { GameState, Scene } from "../types";
import { scenes, initialGameState } from "../data/gameData";

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const savedState = localStorage.getItem("italianAdventureGameState");
    return savedState ? JSON.parse(savedState) : initialGameState;
  });

  const [currentScene, setCurrentScene] = useState<Scene | undefined>(
    scenes.find((scene) => scene.id === gameState.currentSceneId)
  );

  useEffect(() => {
    localStorage.setItem(
      "italianAdventureGameState",
      JSON.stringify(gameState)
    );
    setCurrentScene(
      scenes.find((scene) => scene.id === gameState.currentSceneId)
    );
  }, [gameState]);

  const makeChoice = (nextSceneId: string) => {
    const nextScene = scenes.find((scene) => scene.id === nextSceneId);

    if (!nextScene) return;

    // Add new vocabulary to learned vocabulary
    const newVocabulary =
      nextScene.vocabulary?.filter(
        (v) =>
          !gameState.learnedVocabulary.some(
            (lv) => lv.italian === v.italian && lv.english === v.english
          )
      ) || [];

    // Add new items to inventory
    const newItems =
      nextScene.items?.filter((item) => !gameState.inventory.includes(item)) ||
      [];

    // Update game state
    setGameState((prev) => ({
      ...prev,
      currentSceneId: nextSceneId,
      inventory: [...prev.inventory, ...newItems],
      learnedVocabulary: [...prev.learnedVocabulary, ...newVocabulary],
      visitedScenes: prev.visitedScenes.includes(nextSceneId)
        ? prev.visitedScenes
        : [...prev.visitedScenes, nextSceneId],
    }));
  };

  const resetGame = () => {
    setGameState(initialGameState);
  };

  const hasItem = (itemId: string) => {
    return gameState.inventory.includes(itemId);
  };

  return {
    gameState,
    currentScene,
    makeChoice,
    resetGame,
    hasItem,
  };
};

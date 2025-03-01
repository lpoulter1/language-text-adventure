'use client';

import { useState, useEffect } from 'react';
import { GameState, Scene, Story } from '../types';
import { getSceneById, defaultStory, getStoryById } from '../data/gameData';

interface UseGameStateProps {
  initialStoryId?: string;
}

export const useGameState = ({ initialStoryId }: UseGameStateProps = {}) => {
  // Handle localStorage for server-side rendering
  const isClient = typeof window !== 'undefined';

  // Use the provided initialStoryId or use the default story
  const startingStoryId = initialStoryId || defaultStory.id;

  const [currentStoryId, setCurrentStoryId] = useState<string>(startingStoryId);
  const [currentStory, setCurrentStory] = useState<Story>(
    getStoryById(startingStoryId) || defaultStory
  );

  const [gameState, setGameState] = useState<GameState>(() => {
    if (isClient) {
      const savedState = localStorage.getItem(
        `italianAdventureGameState_${startingStoryId}`
      );
      return savedState
        ? JSON.parse(savedState)
        : currentStory.initialGameState;
    }
    return currentStory.initialGameState;
  });

  const [currentScene, setCurrentScene] = useState<Scene | undefined>(
    getSceneById(currentStoryId, gameState.currentSceneId)
  );

  // Update the current story if the story ID changes
  useEffect(() => {
    const story = getStoryById(currentStoryId) || defaultStory;
    setCurrentStory(story);

    // Initialize a new game state if switching to a different story
    if (gameState.storyId !== currentStoryId) {
      setGameState(story.initialGameState);
    }
  }, [currentStoryId, gameState.storyId]);

  // Save game state to localStorage and update current scene when gameState changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(
        `italianAdventureGameState_${currentStoryId}`,
        JSON.stringify(gameState)
      );
    }

    setCurrentScene(getSceneById(currentStoryId, gameState.currentSceneId));
  }, [gameState, isClient, currentStoryId]);

  const makeChoice = (nextSceneId: string) => {
    const nextScene = currentStory.scenes.find(
      scene => scene.id === nextSceneId
    );

    if (!nextScene) return;

    // Add new vocabulary to learned vocabulary
    const newVocabulary =
      nextScene.vocabulary?.filter(
        v =>
          !gameState.learnedVocabulary.some(
            lv => lv.italian === v.italian && lv.english === v.english
          )
      ) || [];

    // Add new items to inventory
    const newItems =
      nextScene.items?.filter(item => !gameState.inventory.includes(item)) ||
      [];

    setGameState(prevState => ({
      ...prevState,
      currentSceneId: nextSceneId,
      learnedVocabulary: [...prevState.learnedVocabulary, ...newVocabulary],
      inventory: [...prevState.inventory, ...newItems],
      visitedScenes: prevState.visitedScenes.includes(nextSceneId)
        ? prevState.visitedScenes
        : [...prevState.visitedScenes, nextSceneId],
    }));
  };

  const resetGame = () => {
    setGameState(currentStory.initialGameState);
  };

  const switchStory = (storyId: string) => {
    setCurrentStoryId(storyId);
  };

  const hasItem = (itemId: string): boolean => {
    return gameState.inventory.includes(itemId);
  };

  return {
    gameState,
    currentScene,
    currentStory,
    makeChoice,
    resetGame,
    switchStory,
    hasItem,
  };
};

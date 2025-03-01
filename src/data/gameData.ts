import { GameState, Scene } from '../types';
import { allStories, defaultStory, getStoryById } from './stories';

// Re-export stories for backward compatibility
export { allStories, defaultStory, getStoryById };

// Define scenes for easier access
export const scenes = defaultStory.scenes;

// Define the initial game state
export const initialGameState: GameState = defaultStory.initialGameState;

// Helper function to get a scene by ID
export const getSceneById = (
  storyId: string | undefined,
  sceneId: string
): Scene | undefined => {
  if (!storyId) {
    // If no storyId is provided, search in the default story
    return scenes.find((scene: Scene) => scene.id === sceneId);
  }

  // Otherwise, search for the scene in the specific story
  const story = getStoryById(storyId);
  return story?.scenes.find((scene: Scene) => scene.id === sceneId);
};

import { larryStory } from './larry-story';
import { marcoStory } from './marco-story';
import { Story } from '../../types';

// Export all stories
export const allStories: Story[] = [larryStory, marcoStory];

// Default story used for backward compatibility
export const defaultStory = larryStory;

// Helper function to get a story by ID
export const getStoryById = (id: string): Story | undefined => {
  return allStories.find(story => story.id === id);
};

// Helper function to get all available stories
export const getAllStories = (): Story[] => {
  return allStories;
};

export interface Choice {
  text: string;
  nextSceneId: string;
  requiredItem?: string;
  vocabularyHint?: string;
}

export interface Scene {
  id: string;
  title: string;
  description: string;
  image?: string;
  choices: Choice[];
  vocabulary?: {
    italian: string;
    english: string;
  }[];
  grammar?: {
    explanation: string;
    examples: {
      italian: string;
      english: string;
    }[];
  };
  items?: string[];
}

export interface GameState {
  currentSceneId: string;
  inventory: string[];
  learnedVocabulary: {
    italian: string;
    english: string;
  }[];
  visitedScenes: string[];
}

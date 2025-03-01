import { Scene, Story } from '../../types/index';

// Define all scenes for Larry's story
const larryScenes: Scene[] = [
  {
    id: 'start',
    title: 'Benvenuto a Roma, Larry!',
    description:
      "Sei appena arrivato a Roma per vedere la partita del Brighton. Sei un po' nervoso ma eccitato. È una bella giornata di sole. Cosa vuoi fare?",
    image: '/images/rome.webp',
    vocabulary: [
      { italian: 'benvenuto', english: 'welcome' },
      { italian: 'bella giornata', english: 'beautiful day' },
      { italian: 'nervoso', english: 'nervous' },
      { italian: 'eccitato', english: 'excited' },
      { italian: 'partita', english: 'match' },
    ],
    choices: [
      {
        text: 'Andare al bar per un drink',
        nextSceneId: 'bar',
        vocabularyHint: 'andare = to go, drink = bevanda',
      },
      {
        text: 'Visitare lo Stadio Olimpico',
        nextSceneId: 'stadium',
        vocabularyHint: 'visitare = to visit, stadio = stadium',
      },
      {
        text: "Cercare l'hotel",
        nextSceneId: 'hotel',
        vocabularyHint: 'cercare = to look for',
      },
    ],
  },
  // Copy the rest of the scenes from gameData.ts
  {
    id: 'bar',
    title: 'Al Bar',
    description:
      'Sei al bar "La Dolce Vita". Noti una bella barista. Ti sorride e chiede: "Cosa desidera ordinare, signore?"',
    image: '/images/cafe.webp',
    vocabulary: [
      { italian: 'bar', english: 'bar' },
      { italian: 'barista', english: 'bartender' },
      { italian: 'bella', english: 'beautiful' },
      { italian: 'sorridere', english: 'to smile' },
      { italian: 'ordinare', english: 'to order' },
    ],
    grammar: {
      explanation:
        'In Italian, "Cosa desidera?" is a formal way to ask "What would you like?"',
      examples: [
        {
          italian: 'Cosa desidera?',
          english: 'What would you like?',
        },
        {
          italian: 'Cosa desideri?',
          english: 'What do you want? (informal)',
        },
      ],
    },
    choices: [
      {
        text: 'Ordinare un caffè',
        nextSceneId: 'order_coffee',
        vocabularyHint: 'ordinare = to order, caffè = coffee',
      },
      {
        text: 'Chiedere del menu',
        nextSceneId: 'ask_menu',
        vocabularyHint: 'chiedere = to ask, menu = menu',
      },
      {
        text: 'Tornare fuori',
        nextSceneId: 'back_outside',
        vocabularyHint: 'tornare = to return, fuori = outside',
      },
    ],
  },
  // Continue adding the rest of the scenes...
];

// Define Larry's story
export const larryStory: Story = {
  id: 'larry-adventure',
  title: "Larry's Italian Adventure",
  description:
    'Follow Larry as he explores Rome to watch his beloved Brighton football team play. Practice Italian in a fun football-themed adventure.',
  coverImage: '/images/larry-cover.webp',
  languageLevel: 'A1-A2',
  scenes: larryScenes,
  initialGameState: {
    storyId: 'larry-adventure',
    currentSceneId: 'start',
    inventory: [],
    learnedVocabulary: [],
    visitedScenes: [],
  },
};

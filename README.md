# Avventura Italiana - Italian Language Learning Adventure

A fun and interactive text adventure game designed to help beginners learn Italian at the A1-A2 proficiency level.

## Features

- **Immersive Storytelling**: Explore Italy through an interactive story with multiple paths and choices.
- **Vocabulary Building**: Learn new Italian words and phrases in context.
- **Grammar Explanations**: Understand basic Italian grammar rules through practical examples.
- **Visual Design**: Enjoy a visually appealing interface with Italian-inspired colors and design.
- **Progress Tracking**: Keep track of your progress and vocabulary learned.

## Technical Details

This project is built with:

- **React**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **Vite**: For fast development and building

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/language-text-adventure.git
   cd language-text-adventure
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Game Structure

The game is structured around scenes, each representing a different location or situation in Italy. Each scene includes:

- A title and description
- An image representing the scene
- Vocabulary words relevant to the scene
- Grammar explanations when applicable
- Choices that lead to different scenes

## Adding Content

To add new scenes or modify existing ones, edit the `src/data/gameData.ts` file. Each scene follows this structure:

```typescript
{
  id: "unique_id",
  title: "Scene Title",
  description: "Scene description in Italian",
  image: "/images/scene_image.jpg",
  vocabulary: [
    { italian: "word", english: "translation" },
    // more vocabulary
  ],
  grammar: {
    explanation: "Grammar explanation",
    examples: [
      { italian: "Example in Italian", english: "Translation" },
      // more examples
    ],
  },
  choices: [
    {
      text: "Choice text in Italian",
      nextSceneId: "next_scene_id",
      vocabularyHint: "vocabulary hint"
    },
    // more choices
  ],
  items: ["item1", "item2"], // optional items player can collect
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Italian language resources and references
- React and Tailwind CSS communities for their excellent documentation
- All contributors to this educational project

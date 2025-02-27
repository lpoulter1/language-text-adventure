# Avventura Italiana - Italian Language Learning Adventure

A fun and interactive text adventure game designed to help beginners learn Italian at the A1-A2 proficiency level.

## Features

- **Immersive Storytelling**: Explore Italy through an interactive story with multiple paths and choices.
- **Vocabulary Building**: Learn new Italian words and phrases in context.
- **Grammar Explanations**: Understand basic Italian grammar rules through practical examples.
- **Visual Design**: Enjoy a visually appealing interface with Italian-inspired colors and design.
- **Progress Tracking**: Keep track of your progress and vocabulary learned.
- **Text-to-Speech**: Hear the correct pronunciation of Italian words and phrases using ElevenLabs API.

## Technical Details

This project is built with:

- **React**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **Vite**: For fast development and building
- **ElevenLabs API**: For high-quality text-to-speech functionality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- ElevenLabs API key (for text-to-speech functionality)

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

3. Set up environment variables:

   Create a `.env` file in the root directory based on the `.env.example` file:

   ```
   VITE_ELEVENLABS_API_KEY=your_api_key_here
   VITE_ELEVENLABS_VOICE_ID=your_preferred_voice_id  # Optional
   ```

   You can get an API key by signing up at [ElevenLabs](https://elevenlabs.io/). The free tier includes 10,000 characters per month.

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Text-to-Speech Functionality

The game uses ElevenLabs API to provide high-quality text-to-speech for Italian phrases. This helps users learn correct pronunciation.

- **Auto-play**: Scene titles are automatically played when a new scene loads
- **On-demand playback**: Click the speaker icon next to any Italian text to hear it pronounced
- **Caching**: Audio is cached to minimize API calls and improve performance

To customize the voice or other TTS settings, edit the `src/config.ts` file.

## Game Structure

The game is structured around scenes, each representing a different location or situation in Italy. Each scene includes:

- A title and description
- An image representing the scene
- Vocabulary words relevant to the scene
- Grammar explanations when applicable
- Choices that lead to different scenes
- Audio playback for Italian text

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
- ElevenLabs for their high-quality text-to-speech API
- All contributors to this educational project

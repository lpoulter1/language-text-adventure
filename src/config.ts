/**
 * Application Configuration
 */

// ElevenLabs API Configuration
export const ELEVENLABS_CONFIG = {
  // API key - only used on the server side
  API_KEY:
    process.env.ELEVENLABS_API_KEY ||
    process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY ||
    '',

  // API URL
  API_URL: 'https://api.elevenlabs.io/v1',

  // Voice IDs - you can choose different voices from your ElevenLabs account
  // This is a default Italian female voice, replace with your preferred voice ID
  ITALIAN_VOICE_ID:
    process.env.NEXT_PUBLIC_ELEVENLABS_VOICE_ID || 'pNInz6obpgDQGcFmaJgB',

  // Model ID - multilingual model works well for Italian
  MODEL_ID: 'eleven_multilingual_v2',

  // Voice settings
  STABILITY: 0.5,
  SIMILARITY_BOOST: 0.75,
};

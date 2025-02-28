'use client';

/**
 * ElevenLabs API Service - Client-side
 * Uses a server-side API route to protect the API key
 */

import { ELEVENLABS_CONFIG } from '../config';

/**
 * Interface for text-to-speech request options
 */
interface TTSOptions {
  text: string;
  voiceId?: string;
  modelId?: string;
  stability?: number;
  similarityBoost?: number;
}

/**
 * Generate speech from text using the server API
 * @param options - Text-to-speech options
 * @returns Promise with audio blob
 */
export const generateSpeech = async ({
  text,
  voiceId = ELEVENLABS_CONFIG.ITALIAN_VOICE_ID,
  modelId = ELEVENLABS_CONFIG.MODEL_ID,
  stability = ELEVENLABS_CONFIG.STABILITY,
  similarityBoost = ELEVENLABS_CONFIG.SIMILARITY_BOOST,
}: TTSOptions): Promise<Blob> => {
  try {
    const response = await fetch('/api/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        voiceId,
        modelId,
        stability,
        similarityBoost,
      }),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to generate speech';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch (e) {
        // If parsing JSON fails, use the default error message
      }
      throw new Error(errorMessage);
    }

    return await response.blob();
  } catch (error) {
    console.error('Error generating speech:', error);
    throw error;
  }
};

/**
 * Play audio from a blob
 * @param audioBlob - The audio blob to play
 * @returns Promise with the Audio element
 */
export const playAudio = (audioBlob: Blob): Promise<HTMLAudioElement> => {
  return new Promise((resolve, reject) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    audio.onended = () => {
      URL.revokeObjectURL(audioUrl); // Clean up the URL object
      resolve(audio);
    };

    audio.onerror = error => {
      URL.revokeObjectURL(audioUrl);
      reject(error);
    };

    audio.play().catch(reject);
  });
};

/**
 * Generate and play speech from text
 * @param text - The text to convert to speech
 * @returns Promise that resolves when audio finishes playing
 */
export const speakText = async (text: string): Promise<void> => {
  try {
    const audioBlob = await generateSpeech({ text });
    await playAudio(audioBlob);
  } catch (error) {
    console.error('Error speaking text:', error);
    throw error;
  }
};

/**
 * Cache for storing generated audio to avoid repeated API calls
 */
const audioCache: Record<string, Blob> = {};

/**
 * Generate and play speech with caching
 * @param text - The text to convert to speech
 * @returns Promise that resolves when audio finishes playing
 */
export const speakTextWithCache = async (text: string): Promise<void> => {
  try {
    // Check if we already have this audio in cache
    if (!audioCache[text]) {
      audioCache[text] = await generateSpeech({ text });
    }

    await playAudio(audioCache[text]);
  } catch (error) {
    console.error('Error speaking text with cache:', error);
    throw error;
  }
};

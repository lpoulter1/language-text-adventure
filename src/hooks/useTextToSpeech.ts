"use client";

import { useState, useCallback } from "react";
import { speakTextWithCache } from "../services/elevenlabsService";

interface UseTextToSpeechReturn {
  isPlaying: boolean;
  speak: (text: string) => Promise<void>;
  error: Error | null;
}

/**
 * Custom hook for text-to-speech functionality
 * @returns Object with isPlaying state, speak function, and error state
 */
export const useTextToSpeech = (): UseTextToSpeechReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const speak = useCallback(async (text: string): Promise<void> => {
    if (!text) return;

    try {
      setError(null);
      setIsPlaying(true);
      await speakTextWithCache(text);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Unknown error occurred")
      );
      console.error("Text-to-speech error:", err);
    } finally {
      setIsPlaying(false);
    }
  }, []);

  return { isPlaying, speak, error };
};

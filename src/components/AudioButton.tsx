"use client";

import React from "react";
import { useTextToSpeech } from "../hooks/useTextToSpeech";

interface AudioButtonProps {
  text: string;
  className?: string;
}

/**
 * Button component that plays text-to-speech audio when clicked
 */
const AudioButton: React.FC<AudioButtonProps> = ({ text, className = "" }) => {
  const { isPlaying, speak, error } = useTextToSpeech();

  const handleClick = async () => {
    await speak(text);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPlaying}
      className={`inline-flex items-center justify-center p-1 rounded-full bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue transition-colors duration-200 ${className} ${
        isPlaying ? "animate-pulse" : ""
      }`}
      title={isPlaying ? "Riproducendo audio..." : "Ascolta la pronuncia"}
      aria-label={isPlaying ? "Riproducendo audio..." : "Ascolta la pronuncia"}
    >
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="6" y="4" width="4" height="16" fill="currentColor" />
          <rect x="14" y="4" width="4" height="16" fill="currentColor" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      )}
      {error && <span className="sr-only">Error: {error.message}</span>}
    </button>
  );
};

export default AudioButton;

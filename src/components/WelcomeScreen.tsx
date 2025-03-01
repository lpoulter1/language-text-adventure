'use client';

import React from 'react';
import Image from 'next/image';

export interface WelcomeScreenProps {
  onStart: () => void;
  storyTitle: string;
}

export default function WelcomeScreen({
  onStart,
  storyTitle,
}: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cyber-black grid-bg">
      <div className="max-w-2xl w-full bg-cyber-dark p-8 rounded-lg border-2 border-neon-blue shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 neon-text">
          {storyTitle}
        </h1>

        <div className="relative h-48 md:h-64 mb-6">
          <Image
            src="/images/welcome.jpg"
            alt="Italian cityscape"
            fill
            style={{
              objectFit: 'cover',
            }}
            className="rounded-md"
          />
        </div>

        <p className="text-white mb-8">
          Benvenuto al tuo viaggio italiano! In questa avventura interattiva,
          imparerai l&apos;italiano di base mentre esplori una storia
          coinvolgente. Fai delle scelte, raccogli oggetti, e impara nuove
          parole lungo il percorso.
        </p>

        <button
          onClick={onStart}
          className="bg-neon-purple hover:bg-neon-pink text-white font-bold py-3 px-8 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Iniziare l&apos;Avventura
        </button>
      </div>
    </div>
  );
}

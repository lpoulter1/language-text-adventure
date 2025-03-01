'use client';

import React from 'react';
import { Story } from '../types';
import Image from 'next/image';

interface StorySelectorProps {
  stories: Story[];
  onSelectStory: (storyId: string) => void;
}

const StorySelector: React.FC<StorySelectorProps> = ({
  stories,
  onSelectStory,
}) => {
  return (
    <div className="min-h-screen bg-cyber-black grid-bg py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-cyber text-white neon-text mb-4 cyber-heading">
            ITALIAN LANGUAGE ADVENTURES
          </h1>
          <p className="text-xl text-brighton-white">
            Scegli la tua avventura per imparare l'italiano
          </p>
          <p className="text-lg text-neon-blue mt-2">
            Choose your adventure to learn Italian
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stories.map(story => (
            <div
              key={story.id}
              className="bg-cyber-black/80 border border-neon-purple rounded-lg overflow-hidden shadow-lg shadow-neon-purple/20 hover:shadow-neon-purple/50 transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={story.coverImage}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-neon-blue/80 text-white text-xs font-bold px-2 py-1 rounded">
                  {story.languageLevel}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-cyber text-neon-blue mb-2">
                  {story.title}
                </h2>
                <p className="text-brighton-white mb-4">{story.description}</p>
                <button
                  onClick={() => onSelectStory(story.id)}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-2 rounded font-cyber tracking-wide hover:from-neon-purple hover:to-neon-blue transition-all"
                >
                  INIZIA QUESTA AVVENTURA
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorySelector;

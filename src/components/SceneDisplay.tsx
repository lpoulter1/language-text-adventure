'use client';

import React, { useState, useEffect } from 'react';
import { Scene, Choice } from '../types';
import { VocabularyCard } from './VocabularyCard';
import AudioButton from './AudioButton';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import Image from 'next/image';

interface SceneDisplayProps {
  scene: Scene;
  onMakeChoice: (nextSceneId: string) => void;
  hasItem: (itemId: string) => boolean;
  visitedScenes: string[];
}

const SceneDisplay: React.FC<SceneDisplayProps> = ({
  scene,
  onMakeChoice,
  hasItem,
  visitedScenes,
}) => {
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [showGrammar, setShowGrammar] = useState(false);
  const [hoveredChoice, setHoveredChoice] = useState<string | null>(null);
  const { speak } = useTextToSpeech();

  const isFirstVisit = !visitedScenes.includes(scene.id);

  // Auto-play the scene title when the scene changes
  useEffect(() => {
    if (isFirstVisit) {
      // Small delay to ensure the component is fully rendered
      const timer = setTimeout(() => {
        speak(scene.title);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [scene.id, scene.title, speak, isFirstVisit]);

  const handleChoiceClick = (choice: Choice) => {
    if (choice.requiredItem && !hasItem(choice.requiredItem)) {
      return;
    }
    onMakeChoice(choice.nextSceneId);
  };

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <div className="p-6 mb-6 border rounded-lg bg-cyber-black/95 border-neon-purple shadow-neon-purple">
        <div className="flex items-center mb-4">
          <h1 className="text-3xl font-cyber text-neon-blue cyber-heading">
            {scene.title}
          </h1>
          <AudioButton text={scene.title} className="ml-2" />
        </div>

        {scene.image && (
          <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
            <Image
              src={scene.image}
              alt={scene.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={isFirstVisit}
              className="object-cover"
            />
            <div className="absolute inset-0 italian-flag-gradient opacity-10"></div>
          </div>
        )}

        <div className="mb-6 text-on-dark">
          <div className="flex items-start">
            <p className="text-xl scene-text">{scene.description}</p>
            <AudioButton
              text={scene.description}
              className="flex-shrink-0 mt-1 ml-2"
            />
          </div>
        </div>

        {scene.vocabulary && scene.vocabulary.length > 0 && (
          <div className="mb-6">
            <button
              className="mb-4 border btn-secondary bg-neon-blue/10 border-neon-blue"
              onClick={() => setShowVocabulary(!showVocabulary)}
            >
              <span className="button-text">
                {showVocabulary ? 'NASCONDI' : 'VOCABOLARIO'}
              </span>
            </button>

            {showVocabulary && (
              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
                {scene.vocabulary.map((word, index) => (
                  <VocabularyCard
                    key={index}
                    italian={word.italian}
                    english={word.english}
                    isNew={isFirstVisit}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {scene.grammar && (
          <div className="mb-6">
            <button
              className="mb-4 btn-secondary"
              onClick={() => setShowGrammar(!showGrammar)}
            >
              <span className="button-text">
                {showGrammar ? 'NASCONDI' : 'GRAMMATICA'}
              </span>
            </button>

            {showGrammar && (
              <div className="p-4 mt-4 border rounded-lg bg-cyber-black/95 border-neon-blue">
                <div className="mb-4 text-on-dark">
                  <div className="flex items-start">
                    <p className="scene-text">{scene.grammar.explanation}</p>
                    <AudioButton
                      text={scene.grammar.explanation}
                      className="flex-shrink-0 mt-1 ml-2"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  {scene.grammar.examples.map((example, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-4 p-3 rounded bg-cyber-black/80"
                    >
                      <div className="flex items-center">
                        <p className="font-semibold vocab-italian">
                          {example.italian}
                        </p>
                        <AudioButton
                          text={example.italian}
                          className="flex-shrink-0 ml-2"
                        />
                      </div>
                      <p className="vocab-english">{example.english}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-cyber text-neon-purple cyber-heading">
            COSA FAI?
          </h2>
          {scene.choices.map((choice, index) => {
            const isDisabled = !!(
              choice.requiredItem && !hasItem(choice.requiredItem)
            );

            return (
              <div key={index} className="relative">
                <div className="flex items-center">
                  <button
                    className={`w-full text-xl text-left p-4 rounded-lg border-2 transition-colors duration-200 ${
                      isDisabled
                        ? 'bg-cyber-black/70 text-gray-400 border-gray-700 cursor-not-allowed'
                        : 'bg-cyber-black/80 hover:bg-neon-blue/20 border-neon-blue hover:border-neon-pink text-white'
                    }`}
                    onClick={() => !isDisabled && handleChoiceClick(choice)}
                    onMouseEnter={() => setHoveredChoice(choice.text)}
                    onMouseLeave={() => setHoveredChoice(null)}
                    disabled={isDisabled}
                  >
                    <span>{choice.text}</span>
                    {isDisabled && (
                      <span className="ml-2 text-sm font-bold text-neon-orange">
                        (Hai bisogno di un oggetto)
                      </span>
                    )}
                  </button>
                  <AudioButton
                    text={choice.text}
                    className="flex-shrink-0 ml-2"
                  />
                </div>

                {hoveredChoice === choice.text && choice.vocabularyHint && (
                  <div className="absolute left-0 z-10 p-3 text-sm text-white border rounded shadow-md -bottom-12 bg-cyber-black/95 border-neon-pink tech-text">
                    {choice.vocabularyHint}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SceneDisplay;

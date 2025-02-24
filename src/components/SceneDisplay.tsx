import React, { useState } from "react";
import { Scene, Choice } from "../types";
import { VocabularyCard } from "./VocabularyCard";

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

  const isFirstVisit = !visitedScenes.includes(scene.id);

  const handleChoiceClick = (choice: Choice) => {
    if (choice.requiredItem && !hasItem(choice.requiredItem)) {
      return;
    }
    onMakeChoice(choice.nextSceneId);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-cyber-black/80 rounded-lg p-6 border border-neon-purple shadow-neon-purple mb-6">
        <h1 className="text-3xl font-display text-neon-blue mb-4">
          {scene.title}
        </h1>

        {scene.image && (
          <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
            <img
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 italian-flag-gradient opacity-10"></div>
          </div>
        )}

        <p className="text-lg mb-6 scene-text">{scene.description}</p>

        {scene.vocabulary && scene.vocabulary.length > 0 && (
          <div className="mb-6">
            <button
              className="btn-secondary mb-4"
              onClick={() => setShowVocabulary(!showVocabulary)}
            >
              <span>
                {showVocabulary ? "Nascondi Vocabolario" : "Mostra Vocabolario"}
              </span>
            </button>

            {showVocabulary && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
              className="btn-secondary mb-4"
              onClick={() => setShowGrammar(!showGrammar)}
            >
              <span>
                {showGrammar ? "Nascondi Grammatica" : "Mostra Grammatica"}
              </span>
            </button>

            {showGrammar && (
              <div className="bg-cyber-black/80 p-4 rounded-lg border border-neon-blue mt-4">
                <p className="mb-4 scene-text">{scene.grammar.explanation}</p>
                <div className="space-y-2">
                  {scene.grammar.examples.map((example, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                      <p className="font-semibold text-neon-blue">
                        {example.italian}
                      </p>
                      <p className="text-brighton-white">{example.english}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4 mt-6">
          <h2 className="text-xl font-display text-neon-purple">Cosa fai?</h2>
          {scene.choices.map((choice, index) => {
            const isDisabled = !!(
              choice.requiredItem && !hasItem(choice.requiredItem)
            );

            return (
              <div key={index} className="relative">
                <button
                  className={`w-full text-left p-4 rounded-lg border transition-colors duration-200 ${
                    isDisabled
                      ? "bg-cyber-black/50 text-gray-400 border-gray-700 cursor-not-allowed"
                      : "bg-cyber-black/30 hover:bg-neon-blue/10 border-neon-blue hover:border-neon-pink text-brighton-white"
                  }`}
                  onClick={() => !isDisabled && handleChoiceClick(choice)}
                  onMouseEnter={() => setHoveredChoice(choice.text)}
                  onMouseLeave={() => setHoveredChoice(null)}
                  disabled={isDisabled}
                >
                  {choice.text}
                  {isDisabled && (
                    <span className="ml-2 text-sm text-neon-orange">
                      (Hai bisogno di un oggetto)
                    </span>
                  )}
                </button>

                {hoveredChoice === choice.text && choice.vocabularyHint && (
                  <div className="absolute left-0 -bottom-10 bg-cyber-black/90 p-2 rounded shadow-md border border-neon-pink text-sm z-10 text-brighton-white">
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

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
      <div className="bg-cyber-black/95 rounded-lg p-6 border border-neon-purple shadow-neon-purple mb-6">
        <h1 className="text-3xl font-cyber text-neon-blue mb-4 cyber-heading">
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

        <div className="text-on-dark mb-6">
          <p className="text-xl">{scene.description}</p>
        </div>

        {scene.vocabulary && scene.vocabulary.length > 0 && (
          <div className="mb-6">
            <button
              className="btn-secondary mb-4 bg-neon-blue/10 border border-neon-blue"
              onClick={() => setShowVocabulary(!showVocabulary)}
            >
              <span className="button-text">
                {showVocabulary ? "NASCONDI" : "VOCABOLARIO"}
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
              <span className="button-text">
                {showGrammar ? "NASCONDI" : "GRAMMATICA"}
              </span>
            </button>

            {showGrammar && (
              <div className="bg-cyber-black/95 p-4 rounded-lg border border-neon-blue mt-4">
                <div className="text-on-dark mb-4">
                  <p className="scene-text">{scene.grammar.explanation}</p>
                </div>
                <div className="space-y-3">
                  {scene.grammar.examples.map((example, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-4 p-3 bg-cyber-black/80 rounded"
                    >
                      <p className="font-semibold vocab-italian">
                        {example.italian}
                      </p>
                      <p className="vocab-english">{example.english}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4 mt-6">
          <h2 className="text-xl font-cyber text-neon-purple cyber-heading">
            COSA FAI?
          </h2>
          {scene.choices.map((choice, index) => {
            const isDisabled = !!(
              choice.requiredItem && !hasItem(choice.requiredItem)
            );

            return (
              <div key={index} className="relative">
                <button
                  className={`w-full text-xl text-left p-4 rounded-lg border-2 transition-colors duration-200 ${
                    isDisabled
                      ? "bg-cyber-black/70 text-gray-400 border-gray-700 cursor-not-allowed"
                      : "bg-cyber-black/80 hover:bg-neon-blue/20 border-neon-blue hover:border-neon-pink text-white"
                  }`}
                  onClick={() => !isDisabled && handleChoiceClick(choice)}
                  onMouseEnter={() => setHoveredChoice(choice.text)}
                  onMouseLeave={() => setHoveredChoice(null)}
                  disabled={isDisabled}
                >
                  <span>{choice.text}</span>
                  {isDisabled && (
                    <span className="ml-2 text-sm text-neon-orange font-bold">
                      (Hai bisogno di un oggetto)
                    </span>
                  )}
                </button>

                {hoveredChoice === choice.text && choice.vocabularyHint && (
                  <div className="absolute left-0 -bottom-12 bg-cyber-black/95 p-3 rounded shadow-md border border-neon-pink text-sm z-10 text-white tech-text">
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

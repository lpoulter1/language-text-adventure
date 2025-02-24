import { useState } from "react";
import { GameState } from "../types";
import { VocabularyCard } from "./VocabularyCard";

interface PlayerStatusProps {
  gameState: GameState;
}

export const PlayerStatus = ({ gameState }: PlayerStatusProps) => {
  const [activeTab, setActiveTab] = useState<"inventory" | "vocabulary">(
    "inventory"
  );

  const getItemDisplayName = (itemId: string) => {
    const itemNames: Record<string, string> = {
      menu: "Menu del Caffè",
      hotel_key: "Chiave dell'Hotel",
    };

    return itemNames[itemId] || itemId;
  };

  const getItemIcon = (itemId: string) => {
    const itemIcons: Record<string, string> = {
      menu: "📜",
      hotel_key: "🔑",
    };

    return itemIcons[itemId] || "📦";
  };

  return (
    <div className="card">
      <div className="flex border-b-2 border-neon-purple mb-4">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "inventory"
              ? "neon-text-blue border-b-2 border-neon-blue"
              : "text-brighton-white hover:text-neon-blue"
          }`}
          onClick={() => setActiveTab("inventory")}
        >
          Inventario
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "vocabulary"
              ? "neon-text border-b-2 border-neon-pink"
              : "text-brighton-white hover:text-neon-pink"
          }`}
          onClick={() => setActiveTab("vocabulary")}
        >
          Vocabolario ({gameState.learnedVocabulary.length})
        </button>
      </div>

      {activeTab === "inventory" && (
        <div>
          <h2 className="text-xl font-display neon-text-purple mb-4">
            Il tuo inventario
          </h2>
          {gameState.inventory.length === 0 ? (
            <p className="text-neon-blue italic">Il tuo inventario è vuoto.</p>
          ) : (
            <ul className="space-y-3">
              {gameState.inventory.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-3 bg-cyber-black/70 rounded-lg border border-neon-blue shadow-neon-blue"
                >
                  <span className="text-2xl mr-3">{getItemIcon(item)}</span>
                  <span className="text-brighton-white font-medium">
                    {getItemDisplayName(item)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === "vocabulary" && (
        <div>
          <h2 className="text-xl font-display neon-text-purple mb-4">
            Parole che hai imparato
          </h2>
          {gameState.learnedVocabulary.length === 0 ? (
            <p className="text-neon-blue italic">
              Non hai ancora imparato nessuna parola.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {gameState.learnedVocabulary.map((word, index) => (
                <VocabularyCard
                  key={index}
                  italian={word.italian}
                  english={word.english}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

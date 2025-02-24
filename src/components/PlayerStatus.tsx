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
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "inventory"
              ? "text-italian-green border-b-2 border-italian-green"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("inventory")}
        >
          Inventario
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "vocabulary"
              ? "text-italian-green border-b-2 border-italian-green"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("vocabulary")}
        >
          Vocabolario ({gameState.learnedVocabulary.length})
        </button>
      </div>

      {activeTab === "inventory" && (
        <div>
          <h2 className="text-xl font-display text-mediterranean mb-4">
            Il tuo inventario
          </h2>
          {gameState.inventory.length === 0 ? (
            <p className="text-gray-500 italic">Il tuo inventario è vuoto.</p>
          ) : (
            <ul className="space-y-2">
              {gameState.inventory.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 bg-white rounded-lg border border-gray-200"
                >
                  <span className="text-2xl mr-3">{getItemIcon(item)}</span>
                  <span>{getItemDisplayName(item)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === "vocabulary" && (
        <div>
          <h2 className="text-xl font-display text-mediterranean mb-4">
            Parole che hai imparato
          </h2>
          {gameState.learnedVocabulary.length === 0 ? (
            <p className="text-gray-500 italic">
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

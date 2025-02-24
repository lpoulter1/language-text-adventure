import React from "react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-cyber-black min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-neon-pink/80 via-neon-blue/80 to-neon-purple/80 h-2"></div>

      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-cyber-black/80 rounded-lg p-6 shadow-neon-purple">
          <h1 className="text-4xl font-display text-center mb-6 neon-text">
            Larry's Italian Adventure
          </h1>

          <p className="text-brighton-white mb-6 text-center">
            Benvenuto a Roma! Sei Larry, un tifoso del Brighton in trasferta per
            vedere la tua squadra. Esplora la città, impara l'italiano, e magari
            trova l'amore... o almeno un buon caffè!
          </p>

          <div className="mb-6 bg-neon-blue/10 border border-neon-blue rounded-lg p-4">
            <h2 className="text-xl font-display mb-2 text-neon-blue">
              Come giocare
            </h2>
            <ul className="list-disc pl-5 text-brighton-white space-y-2">
              <li>Leggi la descrizione della scena</li>
              <li>Scegli un'azione tra quelle disponibili</li>
              <li>Impara nuove parole italiane durante l'avventura</li>
              <li>Cerca di visitare tutte le scene per completare il gioco</li>
            </ul>
          </div>

          <div className="mb-8 bg-neon-pink/10 border border-neon-pink rounded-lg p-4">
            <h2 className="text-xl font-display mb-2 text-neon-pink">
              Suggerimenti
            </h2>
            <ul className="list-disc pl-5 text-brighton-white space-y-2">
              <li>Clicca sulle parole evidenziate per vedere la traduzione</li>
              <li>
                Controlla il tuo inventario per vedere gli oggetti raccolti
              </li>
              <li>
                Alcune scelte potrebbero sbloccare nuove aree da esplorare
              </li>
              <li>Divertiti e non preoccuparti di sbagliare!</li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={onStart}
              className="btn-primary text-lg px-8 py-3 relative"
            >
              <span>Inizia l'Avventura</span>
            </button>
          </div>

          <p className="text-neon-blue text-center mt-6 text-sm">
            Un'avventura per imparare l'italiano in modo divertente
          </p>
          <p className="text-neon-yellow text-center mt-2 text-xs">
            Questo gioco ha uno scopo educativo: imparare vocaboli italiani
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

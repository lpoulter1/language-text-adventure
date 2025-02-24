import { GameState } from "../types";

interface CompletionScreenProps {
  gameState: GameState;
  totalScenes: number;
  onReset: () => void;
  onContinue: () => void;
}

export const CompletionScreen = ({
  gameState,
  totalScenes,
  onReset,
  onContinue,
}: CompletionScreenProps) => {
  const uniqueVisitedScenes = new Set(gameState.visitedScenes);
  const completionPercentage = Math.round(
    (uniqueVisitedScenes.size / totalScenes) * 100
  );
  const vocabularyCount = gameState.learnedVocabulary.length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-italian-white p-4">
      <div className="max-w-2xl w-full">
        <div className="card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 italian-flag-gradient"></div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-display text-italian-green mb-2">
              Complimenti!
            </h1>
            <p className="text-xl text-mediterranean">
              Hai completato la tua avventura italiana!
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-lg">
              Hai esplorato l'Italia e imparato molte parole e frasi italiane.
              Ecco il tuo risultato:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pasta/20 p-4 rounded-lg border border-pasta text-center">
                <p className="text-sm text-gray-600 mb-1">Progresso</p>
                <p className="text-3xl font-bold text-olive">
                  {completionPercentage}%
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {uniqueVisitedScenes.size} / {totalScenes} scene
                </p>
              </div>

              <div className="bg-italian-green/20 p-4 rounded-lg border border-italian-green text-center">
                <p className="text-sm text-gray-600 mb-1">Vocabolario</p>
                <p className="text-3xl font-bold text-italian-green">
                  {vocabularyCount}
                </p>
                <p className="text-sm text-gray-600 mt-1">parole imparate</p>
              </div>
            </div>

            <div className="bg-italian-white p-4 rounded-lg border border-gray-200">
              <h2 className="font-display text-xl text-mediterranean mb-2">
                Cosa hai imparato:
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vocabolario di base per viaggiare in Italia</li>
                <li>Frasi comuni per ordinare al caffè</li>
                <li>Come fare il check-in in un hotel</li>
                <li>Espressioni per visitare luoghi turistici</li>
                <li>E molto altro!</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="btn-primary text-lg px-8 py-3"
              onClick={onContinue}
            >
              Continua l'Avventura
            </button>
            <button
              className="btn-secondary text-lg px-8 py-3"
              onClick={onReset}
            >
              Ricomincia da Capo
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Continua a esplorare per scoprire tutte le scene e imparare più
              vocabolario!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-italian-white p-4">
      <div className="max-w-2xl w-full">
        <div className="card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 italian-flag-gradient"></div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-display text-italian-green mb-2">
              Avventura Italiana
            </h1>
            <p className="text-xl text-mediterranean">
              Un'avventura per imparare l'italiano
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-lg">
              Benvenuto alla tua avventura italiana! Questo gioco ti aiuterà a
              imparare l'italiano (livello A1-A2) mentre esplori l'Italia
              virtualmente.
            </p>

            <div className="bg-pasta/20 p-4 rounded-lg border border-pasta">
              <h2 className="font-display text-xl text-olive mb-2">
                Come giocare:
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Leggi la descrizione di ogni scena</li>
                <li>Impara nuovo vocabolario e grammatica</li>
                <li>Fai delle scelte per continuare la tua avventura</li>
                <li>Raccogli oggetti nel tuo inventario</li>
                <li>Esplora l'Italia e la sua cultura!</li>
              </ul>
            </div>

            <div className="bg-italian-white p-4 rounded-lg border border-gray-200">
              <h2 className="font-display text-xl text-mediterranean mb-2">
                Suggerimenti:
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Passa il mouse sopra le scelte per vedere suggerimenti di
                  vocabolario
                </li>
                <li>
                  Clicca sulle carte di vocabolario per vedere la traduzione
                </li>
                <li>Il tuo progresso viene salvato automaticamente</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="btn-primary text-lg px-8 py-3" onClick={onStart}>
              Inizia l'Avventura!
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Livello di lingua: A1-A2 (Principiante)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GameHeaderProps {
  onReset: () => void;
  visitedScenesCount: number;
  totalScenes: number;
}

export const GameHeader = ({
  onReset,
  visitedScenesCount,
  totalScenes,
}: GameHeaderProps) => {
  const progressPercentage = Math.round(
    (visitedScenesCount / totalScenes) * 100
  );

  return (
    <header className="bg-white shadow-md py-4 mb-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-12 h-12 mr-3 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 italian-flag-gradient"></div>
          </div>
          <div>
            <h1 className="text-2xl font-display text-italian-green">
              Avventura Italiana
            </h1>
            <p className="text-sm text-gray-600">
              Un'avventura per imparare l'italiano
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-600 mr-2">Progresso:</span>
            <div className="w-48 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-italian-green"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 ml-2">
              {progressPercentage}%
            </span>
          </div>

          <button className="btn-danger text-sm" onClick={onReset}>
            Ricomincia Avventura
          </button>
        </div>
      </div>
    </header>
  );
};

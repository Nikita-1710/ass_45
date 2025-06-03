import { Plus as IconPlus, Minus as IconMinus } from 'lucide-react';

function ScoreCard({ score, increaseScore, decreaseScore, teamName, winner }) {
  const isWinner = winner === teamName;

  return (
    <div className="w-52 p-4 text-center bg-white rounded-xl border border-gray-300 shadow">
      <h2 className="text-xl font-semibold mb-2 border-b-2 pb-4">
        {teamName} {isWinner && "🏆"}
      </h2>
      <h3 className="text-3xl font-bold mb-4">{score}</h3>

      {winner ? null : (
        <div className="flex justify-around items-center">
          <IconMinus
            size={20}
            onClick={decreaseScore}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
          <IconPlus
            size={20}
            onClick={increaseScore}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
      )}
    </div>
  );
}

export default ScoreCard;

import { Plus as IconPlus, Minus as IconMinus } from 'lucide-react'

function ScoreCard({ score, increaseScore, decreaseScore, teamName, winner }) {
    const isWinner = winner === teamName;
    return (
        <div>
            <h2>
                {teamName} {isWinner ? "🏆" : ""}
            </h2>

            <h3>
                {score}
            </h3>

            <div>
                <IconMinus size={60} onClick={decreaseScore} />
                <IconPlus size={60} onClick={increaseScore}/>
            </div>
        </div>
    )
}

export default ScoreCard
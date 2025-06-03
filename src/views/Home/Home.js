import ScoreCard from "../../components/ScoreCard";
import toast, { Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';

function Home() {
    const [scoreA, setScoreA] = useState(0);

    const [scoreB, setScoreB] = useState(0);

    const [winner, setWinner] = useState(null)

    const HIGH_SCORE = 5;

    useEffect(() => {
        if (scoreA < HIGH_SCORE && scoreB < HIGH_SCORE) {
            return;
        }

        if (scoreA === HIGH_SCORE) {
            setWinner("Team A")
            toast.success("Team A Wins🏆")
        }

        if (scoreB === HIGH_SCORE) {
            setWinner("Team B")
            toast.success("Team B Wins🏆")
        }
    }, [scoreA, scoreB]);
    return (
        <div>
            <h1>Score Board</h1>

            <div>
                <ScoreCard
                    score={scoreA}
                    teamName="Team A"
                    increaseScore={() => {
                        setScoreA(scoreA + 1);
                    }}
                    decreaseScore={() => {
                        setScoreA(scoreA - 1);
                    }}
                    winner={winner}
                />

                <ScoreCard
                    score={scoreB}
                    teamName="Team B"
                    increaseScore={() => {
                        setScoreB(scoreB + 1);
                    }}
                    decreaseScore={() => {
                        setScoreB(scoreB - 1);
                    }}
                    winner={winner}
                />
            </div>
            
            {winner ? (<p className='text-center text-2xl'>Winner team is <b className='underline decoration-double text-red-600'>{winner}🏆.</b> Click reset to start again.</p>) : null}

            <div>
                <button onClick={() => {
                    setScoreA(0);
                    setScoreB(0);
                    setWinner(null);
                }}>
                    RESET GAME
                </button>
            </div>
            <Toaster />
        </div>
    )
}

export default Home
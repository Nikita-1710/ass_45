import React, { useState, useEffect } from 'react';
import ScoreCard from '../../components/ScoreCard';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [winner, setWinner] = useState(null);

    const HIGH_SCORE = 5;

    useEffect(() => {
        if (scoreA < HIGH_SCORE && scoreB < HIGH_SCORE) return;

        if (scoreA === HIGH_SCORE) {
            setWinner('Team A');
            toast.success('Team A Wins🏆');
        }

        if (scoreB === HIGH_SCORE) {
            setWinner('Team B');
            toast.success('Team B Wins🏆');
        }
    }, [scoreA, scoreB]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center my-12">Score Board</h1>

            <div className="flex justify-center gap-8 mb-8 flex-wrap">
                <ScoreCard
                    score={scoreA}
                    teamName="Team A"
                    increaseScore={() => setScoreA(scoreA + 1)}
                    decreaseScore={() => setScoreA(scoreA - 1)}
                    winner={winner}
                />
                <ScoreCard
                    score={scoreB}
                    teamName="Team B"
                    increaseScore={() => setScoreB(scoreB + 1)}
                    decreaseScore={() => setScoreB(scoreB - 1)}
                    winner={winner}
                />
            </div>

            {winner && (
                <p className="text-center text-xl sm:text-2xl font-medium text-gray-800 mb-8 px-4">
                    The winning team is{' '}
                    <b className="text-red-700 underline underline-offset-4 decoration-2 decoration-red-500">
                        {winner} 🏆
                    </b>. Click <span className="font-semibold">reset</span> to start again.
                </p>

            )}

            <div className="flex justify-center">
                <button
                    onClick={() => {
                        setScoreA(0);
                        setScoreB(0);
                        setWinner(null);
                    }}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    RESET GAME
                </button>
            </div>

            <Toaster />
        </div>
    );
}

export default Home;

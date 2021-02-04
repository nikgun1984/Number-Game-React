import { useState } from "react";
import "./NumberGame.css";

const NumberGame = (props) => {
	const genRand = () => Math.floor(Math.random() * 10) + 1;
	const restart = () => {
		setTarget(genRand);
		setGuess(0);
		setGuessCount(0);
	};
	const makeGuess = () => {
		setGuess(genRand());
		setGuessCount(guessCount + 1);
	};
	const [guess, setGuess] = useState(genRand);
	const [target, setTarget] = useState(genRand);
	const [guessCount, setGuessCount] = useState(0);
	const isWinner = target === guess;
	return (
		<div className="NumberGame">
			<h1>Target Number: {target}</h1>
			<h1 className={isWinner ? "winner" : "loser"}>Your guess: {guess}</h1>
			<h4>Guess Number: #{guessCount}</h4>
			{!isWinner && <button onClick={makeGuess}>Generate Num</button>}
			<button onClick={restart}>New Game</button>
		</div>
	);
};

export default NumberGame;

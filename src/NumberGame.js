import { useState } from "react";
import "./NumberGame.css";

const NumberGame = (props) => {
	const genRand = () => Math.floor(Math.random() * 10) + 1;
	const [guess, setGuess] = useState(genRand);
	const [target, setTarget] = useState(genRand);
	const isWinner = target === guess;
	return (
		<div className="NumberGame">
			<h1>Target Number: {target}</h1>
			<h1 className={isWinner ? "winner" : "loser"}>Your guess: {guess}</h1>
			{!isWinner && (
				<button onClick={() => setGuess(genRand())}>Generate Num</button>
			)}
		</div>
	);
};

export default NumberGame;

import { useState } from "react";
import dice1 from "./assets/dice1.png";
import dice2 from "./assets/dice2.png";
import dice3 from "./assets/dice3.png";
import dice4 from "./assets/dice4.png";
import dice5 from "./assets/dice5.png";
import dice6 from "./assets/dice6.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [playerone, setPlayerOne] = useState(0);
  const [playertwo, setPlayerTwo] = useState(0);

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleRoll = () => {
    const randomNumber1 = rollDice();
    setPlayerOne(randomNumber1);
    console.log("player1", playerone);
    const randomNumber2 = rollDice();
    setPlayerTwo(randomNumber2);
    console.log("player2", playertwo);
  };

  return (
    <>
      <h1 className="heading">Roll the dice!</h1>
      <div className="card">
        {playerone === playertwo ? (
          <h1>It's a tie</h1>
        ) : playerone > playertwo ? (
          <h1>Player 1 Won</h1>
        ) : (
          <h1>Player 2 Won</h1>
        )}
        <div className="dice-container">
          <div>
            <h2>Player 1</h2>
            <img
              className="dice-img"
              src={`dice${playerone}.png`}
              alt="dice1 image"
            />
          </div>
          <div>
            <h2>Player 2</h2>
            <img
              className="dice-img"
              src={`dice${playertwo}.png`}
              alt="dice1 image"
            />
          </div>
        </div>
        <button className="roll-btn" onClick={handleRoll}>
          Play
        </button>
      </div>
    </>
  );
}

export default App;

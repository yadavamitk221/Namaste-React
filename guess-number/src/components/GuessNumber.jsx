import { useState, useEffect } from "react";

function GuessTheNumber() {
  const [attempts, setAttempts] = useState(0);
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);

  // Function to handle guess checking
  const handleGuess = () => {
    setAttempts(prev => prev + 1);
    if (isNaN(inputNumber)) {
      return setResult("Please enter a number between 1 and 100");
    } else if (inputNumber > 100) {
      return setResult("Please enter a number between 1 and 100")
    } else if (inputNumber > randomNumber) {
      return setResult(" Too high! Try again.");
    } else if (inputNumber < randomNumber) {
      return setResult(" Too low! Try again.");
    } else if (inputNumber === randomNumber) {
      return setResult(`Congratulations! You guessed the number in ${attempts} attempts.`);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 101));
    setAttempts(0);
    setInputNumber("");
  };

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 101));
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0" }}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        id="guess-input"
        type="number"
      />
      <div className="btnContainer">
        <button
          id="check-guess"
          onClick={handleGuess}

        >
          Check Guess
        </button>

        <button
          id="reset-game"
          onClick={resetGame}

        >
          Reset Game
        </button>

      </div>

      <h1>{result}</h1>
    </div>
  );
}

export default GuessTheNumber;

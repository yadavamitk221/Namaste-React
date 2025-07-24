import React, { useState } from 'react';
import "./styles.css";

function EvenOrOddChecker() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkNumberIsEvenOrOdd = () => {
    setResult(null);
    setLoading(true);

    setTimeout(() => {
      const parsed = parseInt(num, 10);
      if (isNaN(parsed)) {
        setResult("Please enter a valid number.");
      } else {
        setResult(`The number ${parsed} is ${parsed % 2 === 0 ? "even" : "odd"}.`);
      }

      setLoading(false); // ✅ fix: stop loading after result is set
    }, 1000);
  }

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        value={num}
        className="number-input"
        type="text"
        placeholder="Enter a number"
        onChange={(e) => setNum(e.target.value)}
        data-testid="number-input"
      />

      <button
        data-testid="check-button"
        onClick={checkNumberIsEvenOrOdd}
        className="check-button"
      >
        Check
      </button>

      <div className="result-area">
        <div className="result">
          {loading ? (
            <div className="loading" data-testid="loading">Checking...</div>
          ) : result !== null ? (
            <div className="result" data-testid="result">{result}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EvenOrOddChecker;

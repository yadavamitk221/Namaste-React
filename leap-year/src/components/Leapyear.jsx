import React, { useState } from "react";
import "./styles.css";

export default function LeapYear() {
  const [inputYear, setInputYear] = useState("");
  const [leapYearString, setLeapYearString] = useState("");
  const [error, setError] = useState("");



  const checkLeapYear = () => {
    setError("");
    setLeapYearString("");
    let trimed = inputYear.trim();

    if (trimed && !isNaN(trimed)) {
    
      let year = new Date(inputYear);

      let fullYear = year.getFullYear();

      if ((fullYear % 4 === 0 && fullYear % 100 !== 0) || (fullYear % 400 === 0 && fullYear % 100 === 0)) {
        setLeapYearString(`${inputYear} is a Leap Year`);
      } else {
        setLeapYearString(`${inputYear} is not a Leap Year`)
      }
    } else {
      setError(`Please enter a year`);
    }
  }



  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        value={inputYear}
        type="text"
        data-testid="year-input"
        onChange={e => setInputYear(e.target.value)}
      />

      <button
        data-testid="check-btn"
        onClick={checkLeapYear}
      >
        Check
      </button>

      <div>
        {leapYearString ? <p data-testid="result" className="result">{leapYearString}</p>
          :
           error ? <p data-testid="error-msg" className="result">{error}</p> : "" }
      </div>
    </div>
  );
}

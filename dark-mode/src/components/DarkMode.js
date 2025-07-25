import React, { useState } from 'react';
import './styles.css'

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1 classNmae>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            onClick={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{darkMode ? <p>Dark Mode</p> : <p>Light Mode</p>}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
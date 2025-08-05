import React, { useState } from "react";
import "./styles.css";

function ReadMoreToggle() {
  
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;

  const [isExpanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded((prev) => !prev);
    }


  return (
    <div className="readmore-container">
      <h1 className="title">Read More Toggle</h1>
      <p className="readmore-text" data-testid="readmore-text">
        {isExpanded ? text : `${text.substring(0, 100)}...`}
      </p>
      <button
        className="readmore-button"
        data-testid="readmore-button"
        onClick={toggleText}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMoreToggle;

import React, { useEffect, useState } from 'react';

// 💡 Function name and logic fix
function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return "Good Morning! ☀️";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon! 🌤️";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening! 🌇";
  } else {
    return "Good Night! 🌙✨";
  }
}

export default function Greeting() {
  const [time, setTime] = useState(new Date()); // ✅ Initial value must be a Date object

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const greeting = getGreeting(time.getHours()); // ✅ Use updated function
  const formattedTime = time.toLocaleTimeString();

  return (
    <div
      className="modal-content"
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        color: "#333",
      }}
    >
      <h2 data-testid="greeting">{greeting}</h2>
      <p data-testid="time" className="updated-time">{formattedTime}</p>
    </div>
  );
}

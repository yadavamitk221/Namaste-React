import React, { useState } from "react";
import './styles.css'

export default function GetWeekday() {
    const [day, setDay] = useState("");
    const [date, setDate] = useState("");
    const [sowDate, setShowDate] = useState(false); 

    const gatDayFunction = (date) => {
        let trimed = date.trim();
        if (trimed) {
            setDate(trimed);
            
        }
    }

    const showPopuAndGetDate= ( ) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        setShowDate(true); 
        let dateObject = new Date(date);
            let day = dateObject.getDay();
            setDay(daysOfWeek[day]);
    }

    return (
        <div className="container">
            <h1>Get Weekday</h1>
            <input
                value={date}
                type="date"
                data-testid="date-input"
                onChange={e => gatDayFunction(e.target.value)}
            />
            <button data-testid="find-day-btn" onClick={showPopuAndGetDate}>
                Find Day
            </button>
            {sowDate && <p className="result">The date falls in {day}</p>}
        </div>
    );
}


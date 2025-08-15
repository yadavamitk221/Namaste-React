import React, { useState } from "react";


function AgeCalculator() {
    const [selectedBirthDate, setSelectedBirthDate] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");


    const calculateAge = () => {
        const todaysDate = new Date(), birth = new Date(selectedBirthDate);
        if (birth > todaysDate) return setError("Birthdate cannot be in the future"), setAge(null);

        let year = todaysDate.getFullYear() - birth.getFullYear();
        let months = todaysDate.getMonth() - birth.getMonth();
        let days = todaysDate.getDate() - birth.getDate();

        if (days < 0){
            days += new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 0).getDate();
            months--;
        
        if (months < 0) {
            months += 12;
            year--;}
        }

        setError(""); setAge({ year, months, days });
    }


    return (
        <div className="conatiner">
            <h2 className="title">Enter/Select a birthdate</h2>
            <label className="label"></label>
            <input
                id="birthdate"
                type="date"
                value={selectedBirthDate}
                className="input-date"
                onChange={e => setSelectedBirthDate(e.target.value)}
            />
            <button className="btn-calc" onClick={() => calculateAge()}>Calculate Age</button>

            {error && <p className="error-msg">{error}</p>}

            {
                age && !error && (
                    <p className="age-result">
                        {age.year} years, {age.months} months, {age.days} days
                    </p>
                )
            }

            <p className="error-msg"></p>
        </div>
    );
}

export default AgeCalculator;

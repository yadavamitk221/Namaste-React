import React, { useState } from "react";

function ChipsInput() {

    const [chips, setChip] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addChip = (input) => {
        let trimed = input.trim();
        if (trimed) {
            setChip(prev => [{ id: Date.now(), item: trimed }, ...prev]);
        }
        setInputValue("");
    }

    const deleteChip = (id) => {
        setChip(prev => prev.filter(chip => chip.id !== id));
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
            <h2>Chips Input</h2>
            <input
                type="text"
                value={inputValue}
                placeholder="Type a chip and press tag"
                style={{ padding: "8px", width: "200px" }}
                onChange={(e => setInputValue(e.target.value))}
                onKeyDown={(e) => e.key === "Enter" && addChip(e.target.value)}
            />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {chips.map((c, id) => (
                    <div
                        key={id}
                        style={{
                            backgroundColor: "rgb(156 163 175)",
                            margin: "4px",
                            borderRadius: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "4px 12px",
                            height: "30px",
                        }}
                    >
                        <p style={{ margin: 0, fontSize: "14px" }}>{c.item}</p>
                        <span
                            onClick={() => deleteChip(c.id)}
                            style={{
                                color: "red",
                                marginLeft: "10px",
                                fontSize: "14px",
                                cursor: "pointer",
                            }}
                        >
                            X
                        </span>
                    </div>
                ))}
            </div>

        </div >
    );
}

export default ChipsInput;
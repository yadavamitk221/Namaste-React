import React, { useState } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState("red");

    const handleProgressDecrease = () => {
        if (progress === 0) {
            return;
        }
        setProgress((prev) => prev - 10);
        if (progress < 40) {
            setColor("red")
        } else if (progress >= 40 && progress <= 79) {
            setColor("yellow")
        } else {
            setColor("green")
        }
    }

    const handleProgressIncrease = () => {
        if (progress === 100) {
            return;
        }
        setProgress((prev) => prev + 10);
        if (progress < 40) {
            setColor("red")
        } else if (progress >= 40 && progress <= 79) {
            setColor("yellow")
        } else {
            setColor("green")
        }
    }

    return (
        <div>
            <h1>Progress Bar</h1>

            <div
                className="Progress-bar-container"
                style={{
                    border: "1px solid black",
                    height: "2rem"
                }}>
                <div
                    id="testBgColor"
                    style={{
                        backgroundColor: `${color}`,
                        width: `${progress}%`,
                        height: "2rem"
                    }}

                >

                </div>
            </div>
            <div>
                <button onClick={handleProgressDecrease}>-10%</button>
                <button onClick={handleProgressIncrease}>+10%</button>
            </div>
        </div>
    );
}

export default ProgressBar;

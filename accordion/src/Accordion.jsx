import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css'

function Accordion({ items }) {
    const [expandId, setExpandId] = useState(null);

    const handleExpand = (id) => {
        if (id === expandId) {
            setExpandId(null);
        } else {
            setExpandId(id);
        }
    }

    return (
        <div>
            {items.length > 0 ? <div>
                {items.map((item, idx) => (
                    <div key={idx} className="accordion" onClick={() => handleExpand(idx)}>
                        <div className="accordion-item">
                            <p>{item.title} </p>
                        </div>
                        {(expandId === idx ? true : false) && <div className="accordion-title">
                            <p>{item.content}</p>
                        </div>}
                    </div>
                ))}
            </div>
                : <p>No items available</p>
            }
        </div>
    );
}

export default Accordion;
import React, { useState } from 'react';
import './styles.css'

function Modal() {
  // Step 1: Create a state variable isOpen and setIsOpen using useState
  const [isOpen, setIsOpen] = useState()

  // Step 2: Create functions handleOpen and handleClose to toggle modal visibility

  return (
    <div style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
      <h1>Modal Popup</h1>

      <button onClick={() => setIsOpen(true)}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Open Modal
      </button>

      {isOpen && <div data-testid="modal-backdrop" className="Modal" onMouseDown={()=>setIsOpen(false)}

      >
        <h1>Modal Header</h1>
        <p>This is the modal body</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>}

    </div>
  );
}

export default Modal;

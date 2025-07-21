import React from "react";
import "./style.css";
import { useState } from "react";

function ConfirmationModal() {
  const [showModal, setShowModal] = useState(false);
  const [actionStatusMessage, setActionStatusMessage] = useState("");

  const openConfirmationModal = () => {
    setShowModal(true);
  }

  const confirmBtnClicked = () => {
    setActionStatusMessage("Confirmed!");
    setShowModal(false);

  }

  const canclledBtnClicked = () => {
    setActionStatusMessage("Cancelled.");
    setShowModal(false);
  }

  return (
    <div className="modal-container">
      <button className="open-modal-btn" onClick={() => openConfirmationModal()}>Open Confirmation Modal</button>

      {showModal  && <div className="modal-backdrop">
        <div className="modal-box">
          <h2 className="modal-title">Confirm Action</h2>
          <p className="modal-message">Are you sure you want to proceed?</p>

          <div className="modal-buttons">
            <button className="confirm-btn" onClick={() =>confirmBtnClicked()}>Confirm</button>
            <button className="cancel-btn" onClick={() => canclledBtnClicked()}>Cancel</button>
          </div>
        </div>
      </div>}

      <div className="action-status">{actionStatusMessage}</div>
    </div>
  );
}

export default ConfirmationModal;

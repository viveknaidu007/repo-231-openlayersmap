import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const MissionModal = ({ waypoints, onClose }) => (
  <Modal isOpen={true} onRequestClose={onClose} contentLabel="Mission Modal">
    <h2>Mission Waypoints</h2>
    <ul>
      {waypoints.map((coord, index) => (
        <li key={index}>
          WP{index + 1}: {coord[0].toFixed(6)}, {coord[1].toFixed(6)}
        </li>
      ))}
    </ul>
    <button onClick={onClose}>Close</button>
  </Modal>
);

export default MissionModal;

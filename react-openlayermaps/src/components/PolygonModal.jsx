import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PolygonModal = ({ polygonPoints, onClose }) => (
  <Modal isOpen={true} onRequestClose={onClose} contentLabel="Polygon Modal">
    <h2>Polygon Waypoints</h2>
    <ul>
      {polygonPoints.map((coord, index) => (
        <li key={index}>
          Point {index + 1}: {coord[0].toFixed(6)}, {coord[1].toFixed(6)}
        </li>
      ))}
    </ul>
    <button onClick={onClose}>Close</button>
  </Modal>
);

export default PolygonModal;

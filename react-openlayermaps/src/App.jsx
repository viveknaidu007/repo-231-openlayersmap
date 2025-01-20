import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import MissionModal from "./components/MissionModal";
import PolygonModal from "./components/PolygonModal";

const App = () => {
  const [showMissionModal, setShowMissionModal] = useState(false);
  const [showPolygonModal, setShowPolygonModal] = useState(false);
  const [waypoints, setWaypoints] = useState([]);
  const [polygonPoints, setPolygonPoints] = useState([]);

  const handleMissionModalClose = () => setShowMissionModal(false);
  const handlePolygonModalClose = () => setShowPolygonModal(false);

  return (
    <div>
      <h1>React + OpenLayers Map</h1>
      <button onClick={() => setShowMissionModal(true)}>Open Mission Modal</button>
      <MapComponent
        setWaypoints={setWaypoints}
        setPolygonPoints={setPolygonPoints}
        showPolygonModal={setShowPolygonModal}
      />
      {showMissionModal && (
        <MissionModal
          waypoints={waypoints}
          onClose={handleMissionModalClose}
        />
      )}
      {showPolygonModal && (
        <PolygonModal
          polygonPoints={polygonPoints}
          onClose={handlePolygonModalClose}
        />
      )}
    </div>
  );
};

export default App;

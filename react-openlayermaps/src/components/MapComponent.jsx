import React, { useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import Draw from "ol/interaction/Draw";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";

const MapComponent = ({ setWaypoints, setPolygonPoints, showPolygonModal }) => {
  useEffect(() => {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({ source: vectorSource });

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([12.9716, 77.5946]), 
        zoom: 12,
      }),
    });

    const drawLine = new Draw({
      source: vectorSource,
      type: "LineString",
    });

    const drawPolygon = new Draw({
      source: vectorSource,
      type: "Polygon",
    });

    map.addInteraction(drawLine);

    drawLine.on("drawend", (event) => {
      const coordinates = event.feature.getGeometry().getCoordinates();
      const transformedCoords = coordinates.map((coord) =>
        fromLonLat(coord)
      );
      setWaypoints(transformedCoords);
    });

    if (showPolygonModal) {
      map.addInteraction(drawPolygon);

      drawPolygon.on("drawend", (event) => {
        const coordinates = event.feature.getGeometry().getCoordinates()[0];
        const transformedCoords = coordinates.map((coord) =>
          fromLonLat(coord)
        );
        setPolygonPoints(transformedCoords);
      });
    }
  }, [setWaypoints, setPolygonPoints, showPolygonModal]);

  return <div id="map" style={{ width: "100%", height: "500px" }} />;
};

export default MapComponent;

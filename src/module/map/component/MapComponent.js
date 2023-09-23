import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Control from "react-leaflet-custom-control";

import "leaflet/dist/leaflet.css";

import layerIcon from "../../../imgs/layer.png";

import PlotLocation from "./PlotLocation";
import VectorLayer from "./VectorLayer";
import EditFeature from "./EditFeature";
import { mapLayers } from "../../../utils/constant";

const butnStyle = {
  backgroundColor: "white",
  color: "black",
  height: "30px",
  width: "80px",
  marginBottom: "2px",
  fontSize: "12px",
};

const MapComponent = (props) => {
  const { position, isClusters, setClusterLayer, isVectorLayer } = props;
  const bounds = [
    [90, -180], // Top-left corner
    [-90, 180], // Bottom-right corner
  ];
  const [layer, setLayer] = useState({
    isLayerActive: false,
    url: mapLayers.openStreet,
  });

  const handleChangeLayer = () => {
    setLayer((prev) => ({ ...prev, isLayerActive: !layer.isLayerActive }));
  };

  const handleChange = (type) => {
    if (type === "satelite") {
      setLayer({ url: mapLayers.satelite });
    }
    if (type === "topo") {
      setLayer({ url: mapLayers.topo });
    }
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      maxBounds={bounds}
      zoom={4}
      scrollWheelZoom={true}
      minZoom={4}
      maxZoom={15}
    >
      <TileLayer url={layer.url} />
      {isVectorLayer && <VectorLayer />}
      <PlotLocation {...{ position, isClusters, setClusterLayer }} />
      <EditFeature />
      <Control prepend position="topright">
        <div>
          <button style={{ background: "white" }} onClick={handleChangeLayer}>
            <img src={layerIcon} width="20" height="20" alt="layer" />
          </button>
        </div>
        {layer.isLayerActive && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "5px",
            }}
          >
            <button style={butnStyle} onClick={() => handleChange("satelite")}>
              Satelite
            </button>
            <button style={butnStyle} onClick={() => handleChange("topo")}>
              Topology
            </button>
          </div>
        )}
      </Control>
    </MapContainer>
  );
};

export default MapComponent;

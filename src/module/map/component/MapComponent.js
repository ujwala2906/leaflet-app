import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import PlotLocation from "./PlotLocation";

const MapComponent = (props) => {
  const { position } = props;

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=8ZkOhU4g5rv4NOheXZ6F" />
      <PlotLocation {...{ position }} />
    </MapContainer>
  );
};

export default MapComponent;

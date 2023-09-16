

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import customMarkerImage from  "../../imgs/mark.png"

const MapComponent = () => {
  const customMarker = new Icon({
    iconUrl: customMarkerImage,
    iconSize: [60, 60],
  });
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=8ZkOhU4g5rv4NOheXZ6F" />
      <Marker position={[51.505, -0.09]} icon={customMarker}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

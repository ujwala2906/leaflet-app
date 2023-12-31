import React, { useEffect } from "react";
import { useMap, Marker, Popup } from "react-leaflet";
import L, { Icon } from "leaflet";

import customMarkerImage from "../../../imgs/mark.png";
import Clusters from "./Clusters";

const customMarker = new Icon({
  iconUrl: customMarkerImage,
  iconSize: [45, 45],
});

const PlotLocation = (props) => {
  const { position, isClusters, setClusterLayer } = props;
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(L.latLng(position[0], position[1]), map.getZoom(), {
        animate: true,
      });
    }
  }, [position, map]);

  return (
    <>
      {!isClusters && (
        <Marker position={position} icon={customMarker}>
          <Popup>You are here.</Popup>
        </Marker>
      )}
      {isClusters && <Clusters {...{ setClusterLayer, isClusters }} />}
    </>
  );
};

export default PlotLocation;

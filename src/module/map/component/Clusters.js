import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { Icon } from "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import customMarkerImage from "../../../imgs/mark.png";

const customMarker = new Icon({
  iconUrl: customMarkerImage,
  iconSize: [30, 30],
});

const Clusters = (props) => {
  const { setClusterLayer, isClusters } = props;
  const map = useMap();

  const markersGroup = [
    { lat: 38.76667, long: -105.51667 },
    { lat: 38.83333, long: -105.8 },
    { lat: 38.5, long: -105.5 },
    { lat: 38.47028, long: -105.24139 },
    { lat: 38.46483, long: -105.7015 },
    { lat: 38.81667, long: -104.61667 },
    { lat: 39.6, long: -105.3 },
    { lat: 38.80778, long: -104.56944 },
    { lat: 39.7, long: -105.7 },
    { lat: 39.75, long: -105.2 },
    { lat: 39.7825, long: -104.93056 },
    { lat: 38.41667, long: -106.21667 },
  ];

  const markerClusterGroup = L.markerClusterGroup({
    zoomToBoundsOnClick: false,
    showCoverageOnHover: false,
    animateAddingMarkers: true,
    animate: true,
    spiderfyOnMaxZoom: true,
  });

  useEffect(() => {
    if (isClusters) {
      markersGroup.forEach((item) => {
        const latlng = [item.lat, item.long];
        const marker = L.marker(latlng, {
          icon: customMarker,
        });
        markerClusterGroup.addLayer(marker);
      });

      markerClusterGroup.addTo(map);

      setClusterLayer(markerClusterGroup);
    }
  }, [isClusters]);

  return null;
};

export default Clusters;

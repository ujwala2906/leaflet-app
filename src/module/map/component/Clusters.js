/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import customMarkerImage from "../../../imgs/mark.png";

const Clusters = (props) => {
  const { setClusterLayer, isClusters } = props;
  const map = useMap();

  const markersGroup = [
    { lat: 38.76667, long: -105.51667, id: 1 },
    { lat: 38.83333, long: -105.8, id: 2 },
    { lat: 38.5, long: -105.5, id: 3 },
    { lat: 38.47028, long: -105.24139, id: 4 },
    { lat: 38.46483, long: -105, id: 5 },
    { lat: 38.81667, long: -104.61667, id: 6 },
    { lat: 39.6, long: -105.3, id: 7 },
    { lat: 38.80778, long: -104.56944, id: 8 },
    { lat: 39.7, long: -105.7, id: 9 },
    { lat: 39.75, long: -105.2, id: 10 },
    { lat: 39.7825, long: -104.93056, id: 11 },
    { lat: 38.41667, long: -106.21667, id: 12 },
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
       // Clear existing markers from markerClusterGroup
      markerClusterGroup.clearLayers();
      markersGroup.forEach((item) => {
        const latlng = [item.lat, item.long];
        const entIcon = L.icon({
          iconUrl: customMarkerImage,
          iconSize: [60, 50],
        });
        const marker = L.marker(latlng, {
          icon: entIcon,
        });
        markerClusterGroup.addLayer(marker);
      });

      markerClusterGroup.addTo(map);

      setClusterLayer(markerClusterGroup);

      return () => {
        map.removeLayer(markerClusterGroup);
      };
    }
  }, [isClusters]);

  return null;
};

export default Clusters;

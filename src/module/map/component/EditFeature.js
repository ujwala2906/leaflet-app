import React from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import "leaflet-draw/dist/leaflet.draw.css";

const EditFeature = () => {
    
  const handleEditShapes = (e) => {
    const { layer } = e;
    console.log(layer);
    // Set your states here using layer
  };
  const handleCreateShapes = (e) => {
    const { layer } = e;
    console.log(layer);
    // Set your states here using layer
  };
  const handleDeleteShapes = () => {
    // Set your states here
  };

  return (
    <>
      <FeatureGroup>
        <EditControl
          position="topleft"
          onEdited={handleEditShapes}
          onCreated={handleCreateShapes}
          onDeleted={handleDeleteShapes}
          draw={{
            polyline: false,
            rectangle: true,
            circlemarker: false,
            circle: true,
            polygon: true,
            marker: false,
          }}
          edit={{
            remove: true,
            edit: true,
          }}
        />
      </FeatureGroup>
    </>
  );
};

export default EditFeature;

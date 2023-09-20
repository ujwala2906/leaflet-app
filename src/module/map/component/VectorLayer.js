import React from "react";

import { Circle, Polygon } from "react-leaflet";

const VectorLayer = () => {

  const polygon = [
    [54.90512066670786, 11.402928399760787],
    [38.875513067353914, 12.545071128860735],
    [48.08752505420212, 40.13221089327493],
  ];

  return (
    <>
      <Circle
        center={[51.505, -0.09]}
        pathOptions={{ fillColor: "blue" }}
        radius={1000000}
      />
      <Polygon pathOptions={{ fillColor: "red" }} positions={polygon} />
    </>
  );
};

export default VectorLayer;

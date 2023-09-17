import React, { useState } from "react";

import { OPEN_STREET_MAP_SEARCH_URL } from "../../utils/constant";
import { MapComponent, Search } from "./component";

import "./map.css";

function MapLeaflet() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [position, setPosition] = useState([51.505, -0.09]);

  const params = {
    q: searchText,
    format: "json",
    addressDetails: 1,
  };

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const queryString = new URLSearchParams(params).toString();

  const openStreetMapSearch = async () => {
    fetch(`${OPEN_STREET_MAP_SEARCH_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);
        setSearchResult(res);
      })
      .catch((err) => {
        console.error("err: ", err);
      });
  };

  const handleRedirect = (lat, lon) => {
    setPosition([lat, lon]);
    setSearchResult([]);
    setSearchText("");
  };

  return (
    <>
      <div className="container">
        <div className="search-container">
          <Search
            {...{
              searchText,
              setSearchText,
              openStreetMapSearch,
              searchResult,
              handleRedirect,
            }}
          />
        </div>
        <div className="large-empty-div">
          <MapComponent {...{ position }} />
        </div>
      </div>
    </>
  );
}

export default MapLeaflet;

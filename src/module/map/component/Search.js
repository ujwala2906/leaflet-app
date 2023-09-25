import React from "react";

import "../map.css";

const Search = (props) => {
  const {
    searchText,
    setSearchText,
    openStreetMapSearch,
    searchResult,
    handleRedirect,
    handleClusters,
    handleAddVectorLayer,
  } = props;

  return (
    <>
      <input
        type="text"
        placeholder="Enter your search text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={openStreetMapSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>

      {searchResult.length !== 0 && (
        <ul className="dropdown-list">
          {searchResult.map((data, index) => (
            <li
              key={data.place_id}
              style={{
                fontSize: "14px",
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => handleRedirect(data.lat, data.lon)}
            >
              {data.display_name}
            </li>
          ))}
        </ul>
      )}

      {!searchResult.length && (
        <>
          <div
            style={{
              display: "flex",
              direction: "row",
              alignItems: "flex-start",
              marginTop: "20px",
            }}
          >
            <button
              onClick={handleClusters}
              style={{
                width: "162px",
                marginRight: "5px",
                background: "#32CD32",
              }}
            >
              Cluster Layer
            </button>
            <button
              onClick={handleAddVectorLayer}
              style={{
                width: "162px",
                marginLeft: "5px",
                background: "#8A2BE2",
              }}
            >
              Vector Layer
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Search;

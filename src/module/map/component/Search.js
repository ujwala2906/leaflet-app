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
    handleRemoveClusters,
    handleAddVectorLayer,
    setIsVectorLayer,
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
            }}
          >
            <button
              onClick={handleClusters}
              style={{ marginTop: "10px", background: "#32CD32" }}
            >
              Display Cluster
            </button>
          </div>
          <div>
            <button
              onClick={handleRemoveClusters}
              style={{ marginTop: "10px", background: "#B22222" }}
            >
              Remove Cluster
            </button>
          </div>
          <div>
            <button
              onClick={handleAddVectorLayer}
              style={{ marginTop: "10px", background: "#4682B4" }}
            >
              Vector Layer
            </button>
          </div>
          <div>
            <button
              onClick={() => setIsVectorLayer(false)}
              style={{ marginTop: "10px", background: "#B22222" }}
            >
              Remove Vector Layer
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Search;

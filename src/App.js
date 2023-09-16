import "./App.css";
import { MapComponent } from "./module";

function App() {
  return (
    <div className="interactive-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter your search text"
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
        />

        <button>Search</button>
      </div>
      <div className="large-empty-div">
        <MapComponent />
        {/* This is where you can render content or components */}
      </div>
    </div>
  );
}

export default App;

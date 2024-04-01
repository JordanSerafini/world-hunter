// App component
import { useEffect } from "react";
import MapContainer from "./components/map/MapContainer";
import { usePoiStore } from "./store/poi.store";

function App() {
  
  useEffect(() => {
    const loadPois = async () => {
      await usePoiStore.getState().fetchPois();
    };
    loadPois();
    
    return () => {
    };
  }, []); 

  return (
    <div className="App">
      <MapContainer />
    </div>
  );
}

export default App;

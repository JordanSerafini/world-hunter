import { GoogleMap, Marker } from "@react-google-maps/api";

import { Poi } from "../../types/poi.type";

const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 45.900002,
    lng: 6.11667,
  };

  const Pokemon = (poi: Poi) => {
    return (
      <Marker
        key={poi.id}
        position={{ lat: poi.lat, lng: poi.lng }}
        icon={poi.url}
      />
    );
  };

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={10}
      center={defaultCenter}
    ></GoogleMap>
  );
};

export default MapContainer;

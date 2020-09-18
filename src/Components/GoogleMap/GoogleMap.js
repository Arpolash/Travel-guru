import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
} from "react-google-maps";

function Map() {

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 21.433920, lng: 91.987030 }}
      />
      );
    }

    const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${'AIzaSyCuEm_sDRa8UX8D-mwAFcgStYihaiFCktA'}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
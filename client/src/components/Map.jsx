import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
//Using the OpenStreetMap API to show the service area

function Map() {
  return (
    <MapContainer center={[41.881832, -87.623177]} zoom={11} scrollWheelZoom={false} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default Map;

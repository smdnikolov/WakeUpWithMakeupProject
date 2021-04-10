import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer center={[42.722453, 23.258676]} zoom={16} scrollWheelZoom={true} zoomControl={false}>
      <ZoomControl position='topright'></ZoomControl>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[42.722453, 23.258676]}>
        <Popup>
          <a target='_blank' rel='noopener noreferrer' href='https://goo.gl/maps/vxEXZHnkJwNuQQaF7'>
            Навигирай
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

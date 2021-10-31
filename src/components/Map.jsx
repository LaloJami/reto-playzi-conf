import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Maps = ({data}) => {

  const MapStyle = {
    height: "50vh",
    width: "100%"
  }

  
  return (
    <div className="Map-contianer">
    <MapContainer center={[data.latitude, data.longitude]} zoom={13} scrollWheelZoom={false} style={MapStyle}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[data.latitude, data.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default Maps;
import React, { useRef, useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = props => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    const map = L.map(mapRef.current).setView(center, zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
    }).addTo(map);
    L.marker(center).addTo(map);

    return () => {
      map.remove();
    };
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
  );
};

export default Map;


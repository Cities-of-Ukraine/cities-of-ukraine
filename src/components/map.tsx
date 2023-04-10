"use client";

import { useEffect } from "react";

const Map: React.FC = () => {
  useEffect(() => {
    import("leaflet").then(L => {
      const map = L.map("map").setView([51.505, -0.09], 6);

      L.tileLayer('https://tile.openstreetmap.org/6/51/9.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
    });
  }, []);
  return <div style={{ height: 180, width: 180 }}><div id="map" /></div>;
};

export default Map;

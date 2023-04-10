"use client";

import { useEffect } from "react";

const Map: React.FC = () => {
  useEffect(() => {
    import("leaflet").then(L => {
      const map = L.map("map").setView([51.505, -0.09], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
    });
  }, []);
  return <div style={{ height: "100%", width: "100%" }}><div id="map"></div></div> 
};

export default Map;

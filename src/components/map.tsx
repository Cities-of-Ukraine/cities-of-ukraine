"use client";

import { useEffect } from "react";

const Map: React.FC = () => {
  useEffect(() => {
    import("leaflet").then(L => {
      const map = L.map("map").setView([51.505, -0.09], 6);
    });
  }, []);
  return <div style={{ height: "100%", width: "100%" }}><div id="map"></div></div>;
};

export default Map;

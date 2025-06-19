/* "use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix des icônes dans Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[-2.499983, 28.876858]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-2.499983, 28.876858]}>
        <Popup>Nous sommes ici !</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
 */

"use client";

import React from "react";

const MapComponent = () => {
  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.022504936758!2d28.873301074443564!3d-2.4994706974791163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c2974c3bce9397%3A0x1519f32559211e7d!2sColl%C3%A8ge%20Alfajiri!5e0!3m2!1sfr!2scd!4v1750090376084!5m2!1sfr!2scd"
        width="450"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;

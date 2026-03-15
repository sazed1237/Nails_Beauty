"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Set default icon manually
L.Icon.Default.mergeOptions({
  iconUrl: iconUrl.src,
  iconRetinaUrl: iconRetinaUrl.src,
  shadowUrl: shadowUrl.src,
});

export default function MapBox() {
  return (
    <section className="max-w-[1320px] mx-auto px-4 xl:px-0 my-16 xl:my-32 ">
      <div className="rounded-3xl overflow-hidden">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          className="h-96 w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Map popup</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

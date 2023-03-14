import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
const redOptions = { color: "cyan" };
const Map = () => {
  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        console.log(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <CircleMarker center={position} pathOptions={redOptions} radius={20}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
    );
  }
  return (
    <MapContainer
      center={[47.914, 106.916]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-4/5 h-screen z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <LocationMarker />
    </MapContainer>
  );
};
export default Map;

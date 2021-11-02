import GoogleMapReact, { Coords } from "google-map-react";
import { Location, Stop } from "./types";
import { UserMapMarker } from "./UserMapMarker";

interface Props {
  center: Location;
  zoom: number;
  stops: Stop[];
}

export const StopsMap = ({ center, zoom, stops }: Props) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCtyVaUjE2TbSqqIR7wwY7781Jv4gN6pBo" }}
        defaultCenter={{ lat: center.latitude, lng: center.longitude }}
        defaultZoom={zoom}
      >
        {stops.map((stop) => {
          return (
            <UserMapMarker
              key={stop.id}
              lat={stop.location.latitude}
              lng={stop.location.longitude}
              text={stop.name}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

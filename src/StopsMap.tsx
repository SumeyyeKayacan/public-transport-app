import GoogleMapReact from "google-map-react";
import { Location, Stop } from "./types";
import { StopMapMarker } from "./StopMapMarker";
import { UserMapMarker } from "./UserMapMarker";

interface Props {
  center: Location;
  zoom: number;
  stops: Stop[];
}

export const StopsMap = ({ center, zoom, stops }: Props) => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCtyVaUjE2TbSqqIR7wwY7781Jv4gN6pBo" }}
        defaultCenter={{ lat: center.latitude, lng: center.longitude }}
        defaultZoom={zoom}
      >
        <UserMapMarker lat={center.latitude} lng={center.longitude} />
        {stops.map((stop) => {
          return (
            <StopMapMarker
              key={stop.id}
              lat={stop.location.latitude}
              lng={stop.location.longitude}
              lineType={stop.name}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { Departure, LineType, Location } from "../lib/types";
import { StopMapMarker } from "./StopMapMarker";
import { useMarkers } from "./useMarkers";
import { UserMapMarker } from "./UserMapMarker";
import { useRouteRenderer } from "./useRouteRenderer";

interface Props {
  center: Location;
  destination?: Location;
  zoom: number;
  departures: Departure[];
}

export const StopsMap = ({ center, destination, zoom, departures }: Props) => {
  console.log("center", center);

  const [map, setMap] = useState<any>();
  useRouteRenderer({ map, center, destination });

  const markers = useMarkers(departures);

  const apiIsLoaded = (map: any, maps: any) => {
    setMap(map);
  };

  return (
    <Box sx={{ height: "320px", width: "100%", margin: "20px 0" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB90LChhhQpdYIbBBaDjrybtvR2UKdRQbM" }}
        defaultCenter={{ lat: center.latitude, lng: center.longitude }}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
      >
        <UserMapMarker lat={center.latitude} lng={center.longitude} />
        {markers.map((marker) => {
          return (
            <StopMapMarker
              key={marker.id}
              lat={marker.lat}
              lng={marker.lng}
              lineType={marker.lineType as LineType}
              lineName={marker.lineName}
            />
          );
        })}
      </GoogleMapReact>
    </Box>
  );
};

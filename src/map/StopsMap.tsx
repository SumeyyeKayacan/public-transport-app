import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useContext, useState } from "react";
import { Error } from "../components/Error";
import { SelectedDepartureContext } from "../container/DeparturesContainer";
import { Departure, LineType, Location } from "../lib/types";
import { StopMapMarker } from "./StopMapMarker";
import { useMarkers } from "./useMarkers";
import { UserMapMarker } from "./UserMapMarker";
import { useRouteRenderer } from "./useRouteRenderer";

interface Props {
  center: Location;
  zoom: number;
  departures: Departure[];
}

export const StopsMap = ({ center, zoom, departures }: Props) => {
  console.log("center", center);

  const { selectedDeparture } = useContext(SelectedDepartureContext);

  const [map, setMap] = useState<any>();

  const { error } = useRouteRenderer({
    map,
    center,
    destination: selectedDeparture?.stop.location,
  });

  const markers = useMarkers(departures);

  const apiIsLoaded = (map: any) => {
    setMap(map);
  };

  if (error) {
    return (
      <Error
        title="Error in getting data"
        message="Departures could not be loaded from the server."
      />
    );
  }

  return (
    <Box sx={{ height: "320px", width: "100%", margin: "20px 0" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB90LChhhQpdYIbBBaDjrybtvR2UKdRQbM" }}
        defaultCenter={{ lat: center.latitude, lng: center.longitude }}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map)}
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

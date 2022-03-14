import { useEffect, useState } from "react";
import { Location } from "../lib/types";
import { getDirectionsRenderer } from "./mapsRenderer";

declare var google: any;

interface Props {
  map: any;
  center: Location;
  destination: Location | undefined;
}

export const useRouteRenderer = ({ map, center, destination }: Props) => {
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!destination) return;

    const directionsRenderer = getDirectionsRenderer();
    directionsRenderer.setMap(map);
    const directionsService = new google.maps.DirectionsService();
    directionsRenderer.setDirections("directions", null);
    directionsService.route(
      {
        origin: new google.maps.LatLng(center.latitude, center.longitude),
        destination: new google.maps.LatLng(
          destination.latitude,
          destination.longitude
        ),
        travelMode: "WALKING",
      },
      (result: any, status: any) => {
        console.log("status", status, result);
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          setError(new Error("Error in fetching directions"));
        }
      }
    );
  }, [center, destination, map]);

  return { error };
};

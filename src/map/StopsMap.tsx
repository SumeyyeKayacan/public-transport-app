import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { Departure, LineType, Location } from "../lib/types";
import { getDirectionsRenderer } from "./mapsRenderer";
import { StopMapMarker } from "./StopMapMarker";
import { useMarkers } from "./useMarkers";
import { UserMapMarker } from "./UserMapMarker";

interface Props {
  center: Location;
  destination?: Location;
  zoom: number;
  departures: Departure[];
}

export const StopsMap = ({ center, destination, zoom, departures }: Props) => {
  console.log("center", center);
  const [maps, setMaps] = useState<any>();

  const markers = useMarkers(departures);

  if (destination) {
    const directionsRenderer = getDirectionsRenderer();
    const directionsService = new maps.DirectionsService();
    directionsRenderer.setDirections("directions", null);
    directionsService.route(
      {
        origin: new maps.LatLng(center.latitude, center.longitude),
        destination: new maps.LatLng(
          destination.latitude,
          destination.longitude
        ),
        travelMode: "WALKING",
      },
      (result: any, status: any) => {
        console.log("status", status);
        if (status === maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  const apiIsLoaded = (map: any, maps: any) => {
    setMaps(maps);
    const directionsRenderer = getDirectionsRenderer();
    directionsRenderer.setMap(map);
  };

  return (
    <div style={{ height: "400px", width: "100%", margin: "20px 0" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCvRh7ej_bi007IhhFxMVgq2CNe4tUlDuo" }}
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
    </div>
  );
};

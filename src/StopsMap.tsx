import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { getDirectionsRenderer } from "./maps-renderer";
import { StopMapMarker } from "./StopMapMarker";
import { LineType, Location } from "./types";
import { Marker } from "./useMarkers";
import { UserMapMarker } from "./UserMapMarker";

interface Props {
  center: Location;
  destination?: Location;
  zoom: number;
  markers: Marker[];
}

export const StopsMap = ({ center, destination, zoom, markers }: Props) => {
  console.log("center", center);
  const [maps, setMaps] = useState<any>();

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
        bootstrapURLKeys={{ key: "AIzaSyCtyVaUjE2TbSqqIR7wwY7781Jv4gN6pBo" }}
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

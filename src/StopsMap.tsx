import GoogleMapReact from "google-map-react";
import { LineType, Location, Stop } from "./types";
import { StopMapMarker } from "./StopMapMarker";
import { UserMapMarker } from "./UserMapMarker";
import { Marker } from "./useMarkers";

interface Props {
  center: Location;
  zoom: number;
  markers: Marker[];
}

export const StopsMap = ({ center, zoom, markers }: Props) => {
  const apiIsLoaded = (map: any, maps: any) => {
    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer({
      suppressMarkers: true,
      suppressBicyclingLayer: true,
    });
    directionsRenderer.setOptions({
      polylineOptions: {
        strokeColor: "#ff85a2",
        strokeWeight: "4",
        strokeOpacity: "0.7",
      },
      // draggable: true,
    });
    directionsRenderer.setMap(map);
    const origin = { lat: 40.756795, lng: -73.954298 };
    const destination = { lat: 52.53666493175609, lng: 13.286566367364195 };

    directionsService.route(
      {
        origin: center,
        destination: destination,
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
  };
  return (
    <div style={{ height: "400px", width: "100%" }}>
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

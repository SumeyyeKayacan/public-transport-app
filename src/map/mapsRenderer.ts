import { theme } from "../theme";

declare var google: any;

let directionsRenderer: any;

export const getDirectionsRenderer = () => {
  if (directionsRenderer) return directionsRenderer;

  directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    suppressBicyclingLayer: true,
  });

  directionsRenderer.setOptions({
    polylineOptions: {
      strokeColor: theme.palette.secondary.main,
      strokeWeight: "4",
      strokeOpacity: "0.7",
    },
    draggable: true,
  });

  return directionsRenderer;
};

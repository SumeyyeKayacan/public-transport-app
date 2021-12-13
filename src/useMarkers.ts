import { Departure, Stop } from "./types";

export interface Marker {
  id: string;
  lineType: string;
  lineName: string;
  lat: number;
  lng: number;
}

export const useMarkers = (data?: Departure[]): Marker[] => {
  const markers: Marker[] = [];
  data?.forEach((departure) => {
    const markerId = `${departure.stop.id}-${departure.line.productName}`;
    if (!markers.find((m) => m.id === markerId)) {
      markers.push({
        id: markerId,
        lineType: departure.line.productName,
        lineName: departure.line.name,
        lat: departure.stop.location.latitude,
        lng: departure.stop.location.longitude,
      });
    }
  });
  console.log("markers", markers);
  return markers;
};

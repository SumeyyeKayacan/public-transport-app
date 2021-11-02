import { Departure, Stop } from "./types";

export const useStops = (data?: Departure[]) => {
  const stops: Stop[] = [];
  data?.forEach((departure) => {
    if (!stops.find((s) => departure.stop.id === s.id)) {
      stops.push(departure.stop);
      console.log("stop id is added", departure.stop.id, departure.stop.name);
      console.log(
        "stop location is",
        departure.stop.location.latitude,
        departure.stop.location.longitude
      );
    }
  });
  return stops;
};

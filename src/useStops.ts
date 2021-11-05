import { Departure, Stop } from "./types";

export const useStops = (data?: Departure[]) => {
  const stops: Stop[] = [];
  data?.forEach((departure) => {
    if (!stops.find((s) => departure.stop.id === s.id)) {
      stops.push(departure.stop);
      console.log(
        "stop id is added",
        departure.stop.id,
        departure.stop.name,
        departure.direction
      );
    } else {
      console.log(
        "stop is skipped",
        departure.stop.id,
        departure.stop.name,
        departure.direction
      );
    }
  });
  console.log("EEENNNDDD");
  return stops;
};

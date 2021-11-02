import { compareAsc } from "date-fns";
import { Departure, Location } from "./types";
import useFetch from "./useFetch";
import { Coords } from "google-map-react";

export const useDepartures = (userLocation: Location) => {
  const { data, error } = useFetch<Departure[]>(
    `http://localhost:8090/departures?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&distance=800`
  );

  data?.sort((d1: Departure, d2: Departure) => {
    return compareAsc(new Date(d1.when), new Date(d2.when));
  });

  return { data, error };
};

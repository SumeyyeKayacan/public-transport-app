import { compareAsc } from "date-fns";
import { Departure, Location } from "../lib/types";
import useFetch from "../lib/useFetch";

export const useDepartures = (userLocation: Location) => {
  console.log("user loc ", userLocation.latitude, userLocation.longitude);
  const { data, error } = useFetch<Departure[]>(
    `http://localhost:8090/departures?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&distance=800`
  );

  data?.sort((d1: Departure, d2: Departure) => {
    return compareAsc(new Date(d1.when), new Date(d2.when));
  });

  return { data, error };
};
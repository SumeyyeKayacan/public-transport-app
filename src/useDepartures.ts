import { compareAsc } from "date-fns";
import { Departure, Location } from "./types";
import useFetch from "./useFetch";

export const useDepartures = (userLocation: Location) => {
  console.log("user loc ", userLocation.latitude, userLocation.longitude);
  const { data, error } = useFetch<Departure[]>(
    `http://localhost:8090/departures?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&distance=800`
    //localhost:8090/departures?latitude=52.53078330061479&longitude=13.300540513650917&distance=800 jungfernheide
    //localhost:8090/departures?latitude=52.5403279&longitude=13.2843892&distance=800 heckerdamm
  );

  data?.sort((d1: Departure, d2: Departure) => {
    return compareAsc(new Date(d1.when), new Date(d2.when));
  });

  return { data, error };
};

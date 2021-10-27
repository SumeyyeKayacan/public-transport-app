import { compareAsc } from "date-fns";
import { Departure } from "./types";
import useFetch from "./useFetch";

export const useDepartures = () => {
  const { data, error } = useFetch<Departure[]>(
    `http://localhost:8090/departures?longitude=52.54032435827903&latitude=13.284231198459231&distance=800`
  );

  data?.sort((d1: Departure, d2: Departure) => {
    return compareAsc(new Date(d1.when), new Date(d2.when));
  });

  return { data, error };
};

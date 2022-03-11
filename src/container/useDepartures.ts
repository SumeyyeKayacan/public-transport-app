import axios from "axios";
import { compareAsc } from "date-fns";
import { useQuery } from "react-query";
import { Departure, Location } from "../lib/types";

const DEPARTURES_KEY = "departures";

const getDepartures = async (userLocation: Location) => {
  const url = `http://localhost:8090/departures?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&distance=800`;
  const { data } = await axios.get(url);
  return data;
};

export const useDepartures = (userLocation: Location) => {
  console.log("user loc ", userLocation.latitude, userLocation.longitude);

  const { data, error } = useQuery(DEPARTURES_KEY, () =>
    getDepartures(userLocation)
  );

  data?.sort((d1: Departure, d2: Departure) => {
    return compareAsc(new Date(d1.when), new Date(d2.when));
  });

  return { data, error };
};

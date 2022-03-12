import { Container } from "@mui/material";
import { useState } from "react";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { Departure, Location } from "../lib/types";
import { DeparturesList } from "../list/DeparturesList";
import { StopsMap } from "../map/StopsMap";
import { useDepartures } from "./useDepartures";

interface Props {
  position: Location;
}

export const DeparturesContainer = ({ position }: Props) => {
  const [destination, setDestination] = useState<Location>();
  const { data, error } = useDepartures(position);

  const handleSelectedDeparture = (departure: Departure) => {
    setDestination(departure.stop.location);
  };

  if (error) {
    return (
      <Error
        title="Error in getting data"
        message="Departures could not be loaded from the server."
      />
    );
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <Container maxWidth="sm" sx={{ height: "100%", overflow: "hidden" }}>
      <StopsMap
        center={position}
        destination={destination}
        zoom={15}
        departures={data}
      />
      <DeparturesList
        departures={data}
        onSelectedDeparture={handleSelectedDeparture}
      />
    </Container>
  );
};

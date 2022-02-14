import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Container,
} from "@mui/material";
import { useState } from "react";
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

  const handleSelectedDparture = (departure: Departure) => {
    setDestination(departure.stop.location);
  };

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error in getting data</AlertTitle>
        Departures could not be loaded from the server.
      </Alert>
    );
  }

  if (!data) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <StopsMap
        center={position}
        destination={destination}
        zoom={15}
        departures={data}
      />
      <DeparturesList
        departures={data}
        onSelectedDeparture={handleSelectedDparture}
      />
    </Container>
  );
};

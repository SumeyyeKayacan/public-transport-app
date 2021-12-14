import { Container } from "@mui/material";
import { useState } from "react";
import { DeparturesList } from "./DeparturesList";
import { StopsMap } from "./StopsMap";
import { Departure, Location } from "./types";
import { useDepartures } from "./useDepartures";
import { useMarkers } from "./useMarkers";

interface Props {
  position: Location;
}

export const DeparturesContainer = ({ position }: Props) => {
  const [destination, setDestination] = useState<Location>();
  const { data, error } = useDepartures(position);

  const markers = useMarkers(data);

  if (!data) return <div>Loading</div>;

  const handleSelectedDparture = (departure: Departure) => {
    setDestination(departure.stop.location);
  };

  return (
    <Container maxWidth="sm">
      <StopsMap
        center={position}
        destination={destination}
        zoom={15}
        markers={markers}
      />
      <DeparturesList
        departures={data}
        onSelectedDeparture={handleSelectedDparture}
      />
    </Container>
  );
};

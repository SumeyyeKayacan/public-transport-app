import { Container } from "@mui/material";
import { createContext, useState } from "react";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { Departure, Location } from "../lib/types";
import { DeparturesList } from "../list/DeparturesList";
import { StopsMap } from "../map/StopsMap";
import { useDepartures } from "./useDepartures";

interface Props {
  position: Location;
}

interface SelectedDepartureContextType {
  selectedDeparture?: Departure;
  setSelectedDeparture: (departure: Departure) => void;
}

export const SelectedDepartureContext =
  createContext<SelectedDepartureContextType>({
    setSelectedDeparture: () => null,
  });

export const DeparturesContainer = ({ position }: Props) => {
  const [selectedDeparture, setSelectedDeparture] = useState<Departure>();
  const { data, error } = useDepartures(position);

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
    <SelectedDepartureContext.Provider
      value={{ selectedDeparture, setSelectedDeparture }}
    >
      <Container maxWidth="sm" sx={{ height: "100%", overflow: "hidden" }}>
        <StopsMap center={position} zoom={15} departures={data} />
        <DeparturesList departures={data} />
      </Container>
    </SelectedDepartureContext.Provider>
  );
};

import { Container } from "@mui/material";
import { DeparturesList } from "./DeparturesList";
import { StopsMap } from "./StopsMap";
import { Location } from "./types";
import { useDepartures } from "./useDepartures";
import { useStops } from "./useStops";

interface Props {
  position: Location;
}

export const DeparturesContainer = ({ position }: Props) => {
  const { data, error } = useDepartures(position);

  const stops = useStops(data);

  if (!data) return <div>Loading</div>;

  return (
    <Container maxWidth="sm">
      <StopsMap center={position} zoom={15} stops={stops} />
      <DeparturesList departures={data} />
    </Container>
  );
};

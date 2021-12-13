import { Container } from "@mui/material";
import { DeparturesList } from "./DeparturesList";
import { StopsMap } from "./StopsMap";
import { Location } from "./types";
import { useDepartures } from "./useDepartures";
import { useMarkers } from "./useMarkers";

interface Props {
  position: Location;
}

export const DeparturesContainer = ({ position }: Props) => {
  const { data, error } = useDepartures(position);

  const markers = useMarkers(data);

  if (!data) return <div>Loading</div>;

  return (
    <Container maxWidth="sm">
      <StopsMap center={position} zoom={15} markers={markers} />
      <DeparturesList departures={data} />
    </Container>
  );
};

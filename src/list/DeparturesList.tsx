import { Grid } from "@mui/material";
import { Departure } from "../lib/types";
import { DeparturesListItem } from "./DepartureListItem";

interface Props {
  departures: Departure[];
}

export const DeparturesList = ({ departures }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "calc(100% - 350px)", overflowY: "scroll" }}
    >
      {departures.map((departure) => (
        <DeparturesListItem
          departure={departure}
          key={departure.tripId}
        ></DeparturesListItem>
      ))}
    </Grid>
  );
};

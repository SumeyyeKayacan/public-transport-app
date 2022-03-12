import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import { Departure } from "../lib/types";
import { DateSection } from "./DateSection";
import { LineName } from "./LineName";

interface Props {
  departures: Departure[];
  onSelectedDeparture: (departure: Departure) => void;
}

export const DeparturesList = ({ departures, onSelectedDeparture }: Props) => {
  const [selectedDeparture, setSelectedDeparture] = useState<string>();

  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "calc(100% - 320px)", overflowY: "scroll" }}
    >
      {departures.map((departure) => (
        <Grid
          item
          xs={12}
          key={departure.tripId}
          onClick={() => {
            onSelectedDeparture(departure);
            setSelectedDeparture(departure.tripId);
          }}
        >
          <Paper
            sx={(theme) => ({
              backgroundColor:
                selectedDeparture === departure.tripId
                  ? theme.palette.primary.main
                  : theme.palette.common.white,
            })}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="nowrap"
            >
              <Grid item sx={{ width: "calc(100% - 40px)" }}>
                <LineName
                  lineType={departure.line.productName}
                  lineNumber={departure.line.nr}
                  direction={departure.direction}
                />
              </Grid>
              <Grid item sx={{ width: "40px" }}>
                <DateSection departureTime={departure.when}></DateSection>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

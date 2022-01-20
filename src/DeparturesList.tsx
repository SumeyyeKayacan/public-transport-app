import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import { DateSection } from "./DateSection";
import { LineName } from "./LineName";
import { Departure } from "./types";

interface Props {
  departures: Departure[];
  onSelectedDeparture: (departure: Departure) => void;
}

export const DeparturesList = ({ departures, onSelectedDeparture }: Props) => {
  const [selectedDeparture, setSelectedDeparture] = useState<string>();

  return (
    <Grid container spacing={2}>
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
            sx={{
              pr: 1,
              py: 0,
              backgroundColor:
                selectedDeparture === departure.tripId ? "#E7E7E7" : "#FFF",
            }}
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

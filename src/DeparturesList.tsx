import { Grid, Paper } from "@mui/material";
import { LineName } from "./LineName";
import { DateSection } from "./DateSection";
import { Departure } from "./types";

interface Props {
  departures: Departure[];
}

export const DeparturesList = ({ departures }: Props) => {
  return (
    <Grid container spacing={2}>
      {departures.map((departure) => (
        <Grid item xs={12} key={departure.tripId}>
          <Paper sx={{ pr: 1, py: 0 }}>
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

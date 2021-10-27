import useFetch from "./useFetch";
import { Container, Grid, Paper } from "@mui/material";
import { LineName } from "./LineName";
import { DateSection } from "./DateSection";
import { Departure } from "./types";
import { formatDistance, subDays } from "date-fns";

function App() {
  const { data, error } = useFetch<Departure[]>(
    `http://localhost:8090/departures?longitude=52.54032435827903&latitude=13.284231198459231&distance=800`
  );

  if (!data) return <div>Loading</div>;

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {data.map((departure) => (
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
      </Container>
    </div>
  );
}

export default App;

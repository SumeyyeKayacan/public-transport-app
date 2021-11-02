import { Container, Grid, Paper } from "@mui/material";
import { LineName } from "./LineName";
import { DateSection } from "./DateSection";
import { useDepartures } from "./useDepartures";
import { StopsMap } from "./StopsMap";
import { Location } from "./types";
import { useStops } from "./useStops";

function App() {
  const userLocation: Location = {
    latitude: 52.54032435827903,
    longitude: 13.284231198459231,
  };
  const { data, error } = useDepartures(userLocation);

  const stops = useStops(data);

  if (!data) return <div>Loading</div>;

  return (
    <div className="App">
      <Container maxWidth="sm">
        <StopsMap center={userLocation} zoom={15} stops={stops} />
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

import { Box, Grid } from "@mui/material";
import { differenceInMinutes } from "date-fns";
import { UrgencyIcon } from "./UrgencyIcon";

interface Props {
  departureTime: string | number | Date;
  walkingDurationInSeconds: number;
}

export const DateSection = ({
  departureTime,
  walkingDurationInSeconds,
}: Props) => {
  return (
    <Box px={1} py={2} sx={{ borderRadius: 1, textAlign: "center" }}>
      <Grid container flexDirection="column">
        <Grid item>
          <UrgencyIcon
            departureTime={departureTime}
            walkingDurationInSeconds={walkingDurationInSeconds}
          />
        </Grid>
        <Grid item>
          <Box>
            <Box sx={{ fontSize: "22px", color: "blue" }}>
              {differenceInMinutes(new Date(departureTime), new Date())}
            </Box>
            <Box sx={{ fontSize: 12 }}>min</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

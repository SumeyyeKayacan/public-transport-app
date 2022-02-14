import { Box } from "@mui/material";
import { differenceInMinutes } from "date-fns";

interface Props {
  departureTime: string | number | Date;
}

export const DateSection = ({ departureTime }: Props) => {
  return (
    <Box px={1} py={3} sx={{ borderRadius: 1, textAlign: "center" }}>
      <Box sx={{ fontSize: "24px", color: "blue" }}>
        {differenceInMinutes(new Date(departureTime), new Date())}
      </Box>
      <Box sx={{ fontSize: 12 }}>min</Box>
    </Box>
  );
};

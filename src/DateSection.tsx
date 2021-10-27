import { Box } from "@mui/material";
import { LineType } from "./types";
import { differenceInMinutes } from "date-fns";

interface Props {
  departureTime: string | number | Date;
}

const lineMapping = {
  [LineType.Bus]: { color: "#993399", text: "BUS" },
  [LineType.Subway]: { color: "#003499", text: "U" },
  [LineType.Train]: { color: "#37874A", text: "S" },
  [LineType.Tram]: { color: "#CC0200", text: "M" },
};

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

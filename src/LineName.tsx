import { Box } from "@mui/material";
import { LineType } from "./types";

interface Props {
  lineType: LineType;
  lineNumber: string;
  direction: string;
}

const lineMapping = {
  [LineType.Bus]: { color: "#993399", text: "BUS" },
  [LineType.Subway]: { color: "#003499", text: "U" },
  [LineType.Train]: { color: "#37874A", text: "S" },
  [LineType.Tram]: { color: "#CC0200", text: "M" },
};

export const LineName = ({ lineType, lineNumber, direction }: Props) => {
  const { color, text } = lineMapping[lineType];
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Box
        px={1}
        py={3}
        bgcolor={color}
        color="white"
        sx={{ borderRadius: 1, width: 80, minWidth: 80, textAlign: "center" }}
      >
        {text}
        {lineNumber}
      </Box>
      <Box pl={1} sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
        {direction}
      </Box>
    </Box>
  );
};

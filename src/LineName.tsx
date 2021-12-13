import { Box } from "@mui/material";
import { lineMapping } from "./LineMapping";
import { LineType } from "./types";

interface Props {
  lineType: LineType;
  lineNumber: string;
  direction: string;
}

export const LineName = ({ lineType, lineNumber, direction }: Props) => {
  const { color, text } = lineMapping[lineType];
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Box
        px={1}
        py={3}
        bgcolor={color}
        color="white"
        sx={{
          borderRadius: 1,
          width: 80,
          minWidth: 80,
          textAlign: "center",
          fontWeight: 600,
        }}
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

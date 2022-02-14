import { LineType } from "./types";

export const lineMapping = {
  [LineType.Bus]: { color: "#993399", text: "BUS", url: "./BVG/Bus.svg" },
  [LineType.Subway]: { color: "#003499", text: "U", url: "./BVG/U-subway.svg" },
  [LineType.Train]: {
    color: "#37874A",
    text: "S",
    url: "./BVG/S-suburban.svg",
  },
  [LineType.Tram]: { color: "#CC0200", text: "M", url: "./BVG/Tram.svg" },
};

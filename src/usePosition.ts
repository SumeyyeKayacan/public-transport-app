import { useState } from "react";
import { Location } from "./types";

export const usePosition = () => {
  const [position, setPosition] = useState<Location>();

  navigator.geolocation.getCurrentPosition(function ({
    coords,
  }: GeolocationPosition) {
    setPosition({ latitude: coords.latitude, longitude: coords.longitude });
  });

  return position;
};

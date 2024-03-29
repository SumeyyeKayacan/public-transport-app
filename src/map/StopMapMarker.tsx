import BusLogo from "../assets/bus.svg";
import TrainLogo from "../assets/suburban.svg";
import SubwayLogo from "../assets/subway.svg";
import TramLogo from "../assets/tram.svg";
import { LineType } from "../lib/types";
interface Props {
  lineType: LineType;
  lineName: string;
  lat: number;
  lng: number;
}

export const StopMapMarker = ({ lineType }: Props) => {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      {lineType === LineType.Bus && (
        <img src={BusLogo} height={30} width={30} alt="Bus" />
      )}
      {lineType === LineType.Subway && (
        <img src={SubwayLogo} height={25} width={25} alt="U" />
      )}
      {lineType === LineType.Train && (
        <img src={TrainLogo} height={30} width={30} alt="S" />
      )}
      {lineType === LineType.Tram && (
        <img src={TramLogo} height={30} width={30} alt="Tram" />
      )}
    </div>
  );
};

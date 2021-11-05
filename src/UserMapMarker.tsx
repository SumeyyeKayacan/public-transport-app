import userPin from "./assets/user-pin.svg";
import { styled } from "@mui/material/styles";

interface Props {
  lat: number;
  lng: number;
}

const UserImage = styled("img")`
  width: 40px;
  height: 40px;
`;

export const UserMapMarker = (props: Props) => (
  <div>
    <UserImage src={userPin} />
  </div>
);

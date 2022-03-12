import { styled } from "@mui/material/styles";
import userPin from "../assets/user-pin.svg";

interface Props {
  lat: number;
  lng: number;
}

const UserImage = styled("img")(
  ({ theme }) => `
  width: ${theme.spacing(5)};
  height: ${theme.spacing(5)};
`
);

export const UserMapMarker = (props: Props) => (
  <div>
    <UserImage src={userPin} />
  </div>
);

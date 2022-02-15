import { Alert, AlertTitle } from "@mui/material";

interface Props {
  title: string;
  message: string;
}

export const Error = ({ title, message }: Props) => {
  return (
    <Alert severity="error">
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

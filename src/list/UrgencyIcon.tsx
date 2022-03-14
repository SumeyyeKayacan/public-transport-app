import CoffeeIcon from "@mui/icons-material/Coffee";
import DirectionsRun from "@mui/icons-material/DirectionsRun";
import DirectionsWalk from "@mui/icons-material/DirectionsWalk";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import { Box } from "@mui/material";
import { differenceInSeconds } from "date-fns";

interface Props {
  departureTime: string | number | Date;
  walkingDurationInSeconds: number;
}

enum Urgency {
  None,
  NotPossible,
  Walking,
  Running,
  WaitForIt,
}

const calculateUrgency = (
  departureInSeconds: number,
  walkingDurationInSeconds: number
) => {
  if (!walkingDurationInSeconds) {
    return Urgency.None;
  }

  const urgencyFactor = departureInSeconds / walkingDurationInSeconds;

  if (urgencyFactor > 0.8 && urgencyFactor <= 1) {
    return Urgency.Running;
  }

  if (urgencyFactor > 1 && urgencyFactor <= 1.6) {
    return Urgency.Walking;
  }

  if (urgencyFactor > 1.6) {
    return Urgency.WaitForIt;
  }

  return Urgency.NotPossible;
};

export const UrgencyIcon = ({
  departureTime,
  walkingDurationInSeconds,
}: Props) => {
  const departureInSeconds = differenceInSeconds(
    new Date(departureTime),
    new Date()
  );

  const urgency = calculateUrgency(
    departureInSeconds,
    walkingDurationInSeconds
  );

  return (
    <Box>
      {urgency === Urgency.NotPossible && <NotificationImportantIcon />}
      {urgency === Urgency.Walking && <DirectionsWalk />}
      {urgency === Urgency.Running && <DirectionsRun />}
      {urgency === Urgency.WaitForIt && <CoffeeIcon />}
    </Box>
  );
};

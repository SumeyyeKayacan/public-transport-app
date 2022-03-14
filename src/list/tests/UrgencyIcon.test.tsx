import { render } from "@testing-library/react";
import { UrgencyIcon } from "../UrgencyIcon";

describe("UrgencyIcon", () => {
  it.each`
    departureTimeOffsetInSeconds | walkingDurationInSeconds | expectedIcon
    ${50}                        | ${100}                   | ${"NotificationImportantIcon"}
    ${100}                       | ${100}                   | ${"DirectionsWalkIcon"}
    ${100}                       | ${120}                   | ${"DirectionsRunIcon"}
    ${175}                       | ${100}                   | ${"CoffeeIcon"}
  `(
    "should show urgency correctly",
    ({
      departureTimeOffsetInSeconds,
      walkingDurationInSeconds,
      expectedIcon,
    }) => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date("2020-01-01").getTime());

      const departureTime = Date.now() + departureTimeOffsetInSeconds * 1000;

      const { getByTestId } = render(
        <UrgencyIcon
          departureTime={departureTime}
          walkingDurationInSeconds={walkingDurationInSeconds}
        />
      );

      expect(getByTestId(expectedIcon)).toBeInTheDocument();
    }
  );
});

import { renderHook } from "@testing-library/react-hooks";
import { useQuery } from "react-query";
import { Location } from "../../lib/types";
import { useDepartures } from "./../useDepartures";

jest.mock("react-query");

describe("useDepartures", () => {
  it("should return data correctly", () => {
    const location: Location = {
      latitude: 100,
      longitude: 100,
    };

    const departures = [
      {
        tripId: "2",
        when: "2020-01-02",
      },
      {
        tripId: "1",
        when: "2020-01-01",
      },
    ];

    (useQuery as jest.Mock).mockReturnValue({
      data: departures,
    });

    const { result } = renderHook(() => useDepartures(location));

    const data = result.current.data;

    expect(data).toEqual(departures);
    expect(data[0].tripId).toEqual("1");
    expect(data[1].tripId).toEqual("2");
  });
});

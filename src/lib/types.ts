export enum LineType {
  Bus = "Bus",
  Subway = "U",
  Tram = "Tram",
  Train = "S",
  //Regional
}

export interface Location {
  longitude: number;
  latitude: number;
}

export interface Stop {
  id: string;
  name: string;
  location: Location;
}

export interface Line {
  name: string;
  productName: LineType;
  nr: string;
  express: boolean;
  night: boolean;
}

export interface Departure {
  tripId: string;
  stop: Stop;
  when: string;
  delay: number;
  direction: string;
  line: Line;
  walkingDuration: number;
}

interface Props {
  lineType: string;
  lat: number;
  lng: number;
}

export const StopMapMarker = ({ lineType }: Props) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {lineType}
  </div>
);

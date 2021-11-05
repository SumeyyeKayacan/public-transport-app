import GoogleMapReact, { Coords } from "google-map-react";
import React from "react";

const AnyReactComponent = ({ text }) => (
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
    {text}
  </div>
);

export class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  render() {
    console.log("this.props.center", this.props.center);
    console.log("this.props.zoom", this.props.zoom);
    return (
      <>
        test
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCtyVaUjE2TbSqqIR7wwY7781Jv4gN6pBo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          />
        </GoogleMapReact>
      </>
    );
  }
}

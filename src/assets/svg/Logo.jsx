import * as React from "react";
import logo from "../img/logo.png";

function SvgComponent(props) {
  return (
    <img
      src={logo}
      style={{ width: "100px", height: "80px", color: "blue" }}
      alt="logo"
    />
  );
}

export default SvgComponent;

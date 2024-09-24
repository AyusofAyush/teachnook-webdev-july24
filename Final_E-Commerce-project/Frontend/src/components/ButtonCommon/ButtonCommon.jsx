import React from "react";
import "./ButtonCommon.scss";

function ButtonCommon({ btnText = "Button", className }) {
  return <button className={className}>{btnText}</button>;
}

export default ButtonCommon;

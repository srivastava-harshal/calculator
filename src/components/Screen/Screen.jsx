import React from "react";
import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" max={70} mode="single">
      {value}
    </Textfit>
  );
};

export default Screen;

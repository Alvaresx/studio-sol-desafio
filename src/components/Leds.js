import React from "react";
import * as Styled from "../styles/style";

function Leds() {
  return (
    <>
      <Styled.ContainerSegments id="container_segments">
        <div data-testid="div_segments">
          <div id="segment-a" className="segment active"></div>
          <div id="segment-b" className="segment active"></div>
          <div id="segment-c" className="segment active"></div>
          <div id="segment-d" className="segment active"></div>
          <div id="segment-e" className="segment active"></div>
          <div id="segment-f" className="segment active"></div>
          <div id="segment-g" className="segment"></div>
        </div>
      </Styled.ContainerSegments>
    </>
  );
}

export default Leds;

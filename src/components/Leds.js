import React from "react";
import * as Styled from "../styles/style";

function Leds() {
  return (
    <>
      <Styled.ContainerSegments id="container_segments">
        <div>
          <Styled.Segment className="segment_a active" />
          <Styled.Segment className="segment_b active" />
          <Styled.Segment className="segment_c active" />
          <Styled.Segment className="segment_d active" />
          <Styled.Segment className="segment_e active" />
          <Styled.Segment className="segment_f active" />
          <Styled.Segment className="segment_g not_active" />
        </div>
      </Styled.ContainerSegments>
    </>
  );
}

export default Leds;

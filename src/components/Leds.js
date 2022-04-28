import React from "react";
import * as Styled from "../styles/style";

function Leds({ arrayActive }) {
  return (
    <>
      <Styled.ContainerSegments id="container_segments">
        {arrayActive.map((item, index) => (
          <div key={index}>
            <Styled.Segment className={`segment_a ${item.a}`} />
            <Styled.Segment className={`segment_b ${item.b}`} />
            <Styled.Segment className={`segment_c ${item.c}`} />
            <Styled.Segment className={`segment_d ${item.d}`} />
            <Styled.Segment className={`segment_e ${item.e}`} />
            <Styled.Segment className={`segment_f ${item.f}`} />
            <Styled.Segment className={`segment_g ${item.g}`} />
          </div>
        ))}
      </Styled.ContainerSegments>
    </>
  );
}

export default Leds;

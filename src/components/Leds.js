import React from "react";
import * as Styled from "../styles/style";

function Leds({ arrayActive }) {
  return (
    <>
      <Styled.ContainerSegments id="container_segments">
        {arrayActive.map((item, index) => (
          <div key={index}>
            <Styled.Segment
              className={`segment_a ${item.a}`}
              data-testid="segment_a"
            />
            <Styled.Segment
              className={`segment_b ${item.b}`}
              data-testid="segment_b"
            />
            <Styled.Segment
              className={`segment_c ${item.c}`}
              data-testid="segment_c"
            />
            <Styled.Segment
              className={`segment_d ${item.d}`}
              data-testid="segment_d"
            />
            <Styled.Segment
              className={`segment_e ${item.e}`}
              data-testid="segment_e"
            />
            <Styled.Segment
              className={`segment_f ${item.f}`}
              data-testid="segment_f"
            />
            <Styled.Segment
              className={`segment_g ${item.g}`}
              data-testid="segment_g"
            />
          </div>
        ))}
      </Styled.ContainerSegments>
    </>
  );
}

export default Leds;

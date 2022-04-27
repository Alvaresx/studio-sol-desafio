import React from "react";
import * as Styled from "../styles/style";

function InfoMessage({ infoMessage, textColor }) {
  return (
    <>
      <Styled.InfoMessage textColor={textColor} data-testid="info_message">
        {infoMessage}
      </Styled.InfoMessage>
    </>
  );
}

export default InfoMessage;

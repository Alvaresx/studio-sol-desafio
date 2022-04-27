import React from "react";

function InfoMessage({ infoMessage }) {
  return (
    <>
      <div id="info_message" data-testid="info_message">
        {infoMessage}
      </div>
    </>
  );
}

export default InfoMessage;

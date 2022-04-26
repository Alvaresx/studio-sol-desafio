import React from "react";

function Footer(props) {
  const isNumber = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div>
        <div id="container_restart_button">
          <button id="restart_button" onClick={props.handleNewGame}>
            Nova partida
          </button>
        </div>
        <div id="container_input_button">
          <input
            id="guess_input"
            placeholder="Digite o palpite"
            value={props.inputValue}
            onKeyPress={(e) => isNumber(e)}
            maxLength={3}
            onChange={(e) => props.handleChangeInput(e.target.value)}
          />
          <button
            id="send_button"
            onClick={props.number === 0 ? props.getNumber : props.verifyNumber}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;

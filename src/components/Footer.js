import React from "react";

function Footer(props) {
  return (
    <>
      <div>
        <div id="container_restart_button" class="container_restart_button">
          <button
            id="restart_button"
            class="restart_button"
            onClick={props.handleNewGame}
          >
            Nova partida
          </button>
        </div>
        <div class="container_input_button">
          <input
            id="guess_input"
            class="guess_input"
            placeholder="Digite o palpite"
            maxLength={3}
            onChange={(e) => props.handleChangeInput(e.target.value)}
          />
          <button
            id="send_button"
            class="send_button"
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

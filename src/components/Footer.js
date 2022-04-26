import React from "react";
import ReloadIcon from "../img/reload-icon.svg";
import { isNumber } from "../functions/IsNumber";

function Footer(props) {
  return (
    <>
      <div>
        <div id="container_restart_button">
          <button id="restart_button" onClick={props.handleNewGame}>
            <img src={ReloadIcon} alt="Ícone de recarregar" id="reload_icon" />
            Nova partida
          </button>
        </div>
        <div id="container_input_button">
          <input
            id="guess_input"
            class="guess_input"
            placeholder="Digite o palpite"
            value={props.inputValue}
            onKeyPress={(e) => isNumber(e)}
            maxLength={3}
            onChange={(e) => props.handleChangeInput(e.target.value)}
          />
          <button id="send_button" onClick={props.verifyNumber}>
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;

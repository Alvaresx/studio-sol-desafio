import React from "react";
import ReloadIcon from "../img/reload-icon.svg";
import { isNumber } from "../functions/IsNumber";

function Footer({
  handleNewGame,
  inputValue,
  handleChangeInput,
  verifyNumber,
}) {
  return (
    <>
      <div>
        <div id="container_restart_button" data-testid="container_restart_button">
          <button id="restart_button" onClick={handleNewGame}>
            <img src={ReloadIcon} alt="Ícone de recarregar" id="reload_icon" />
            Nova partida
          </button>
        </div>
        <div id="container_input_button">
          <input
            id="guess_input"
            className="guess_input"
            placeholder="Digite o palpite"
            value={inputValue}
            onKeyPress={(e) => isNumber(e)}
            maxLength={3}
            onChange={(e) => handleChangeInput(e.target.value)}
          />
          <button id="send_button" onClick={verifyNumber}>
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;

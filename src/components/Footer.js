import React from "react";
import ReloadIcon from "../img/reload-icon.svg";
import { isNumber } from "../functions/IsNumber";
import * as Styled from "../styles/style";

function Footer({
  handleNewGame,
  inputValue,
  handleChangeInput,
  verifyNumber,
  isDisabled,
  inputClassError,
  visibility,
}) {
  return (
    <>
      <div>
        <Styled.ContainerRestartButton visibility={visibility}>
          <Styled.RestartButton onClick={handleNewGame}>
            <Styled.ReloadIcon src={ReloadIcon} alt="Ícone de recarregar" />
            Nova partida
          </Styled.RestartButton>
        </Styled.ContainerRestartButton>
        <Styled.ContainerInputButton>
          <Styled.GuessInput
            className={inputClassError}
            placeholder="Digite o palpite"
            value={inputValue}
            onKeyPress={(e) => isNumber(e)}
            maxLength={3}
            disabled={isDisabled}
            onChange={(e) => handleChangeInput(e.target.value)}
          />
          <Styled.SendButton onClick={verifyNumber} disabled={isDisabled}>
            Enviar
          </Styled.SendButton>
        </Styled.ContainerInputButton>
      </div>
    </>
  );
}

export default Footer;

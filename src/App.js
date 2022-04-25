import React, { useEffect, useState } from "react";
import { handleChangeLed } from "./ChangeLeds";
import { handleInputNumbers } from "./InputNumbers";
import "./styles/style.css";
function App() {
  const [number, setNumber] = useState(0);
  const [infoMessage, setInfoMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function getNumber() {
    await fetch(
      "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.value);
        setNumber(data.value.toString());
        verifyNumber();
      })
      .catch(function (err) {
        console.log(err);
        document.getElementById("container_restart_button").style.display =
          "flex";
        document.getElementById("send_button").disabled = true;
        document.getElementById("guess_input").disabled = true;
      });
  }

  const verifyNumber = () => {
    handleChangeLed(inputValue);
    if (inputValue === number) {
      setInfoMessage("Você acertou!!!");
      document.getElementById("send_button").disabled = true;
      document.getElementById("guess_input").disabled = true;
      document.getElementById("container_restart_button").style.display =
        "flex";
      document.getElementById("info_message").style.color = "#32bf00";
    } else if (inputValue > number) {
      setInfoMessage("É menor");
    } else {
      setInfoMessage("É maior");
    }
    setInputValue("");
  };

  const handleChangeInput = (e) => {
    setInputValue(e);
  };

  return (
    <>
      <div class="container">
        <div>
          <h1 class="title">Qual é o número?</h1>
          <div class="divider"></div>
        </div>

        <div id="info_message">{infoMessage}</div>
        <div id="container_segments"></div>

        <div>
          <div id="container_restart_button" class="container_restart_button">
            <button id="restart_button" class="restart_button">
              Nova partida
            </button>
          </div>
          <div class="container_input_button">
            <input
              id="guess_input"
              class="guess_input"
              placeholder="Digite o palpite"
              maxLength={3}
              onKeyPress={(e) => handleInputNumbers(e)}
              onChange={(e) => handleChangeInput(e.target.value)}
            />
            <button
              id="send_button"
              class="send_button"
              onClick={number === 0 ? getNumber : verifyNumber}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

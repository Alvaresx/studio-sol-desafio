import React, { useEffect, useState } from "react";
import { handleChangeLed } from "./ChangeLed";
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
      setInputValue("");
      document.getElementById("send_button").disabled = true;
      document.getElementById("guess_input").disabled = true;
      document.getElementById("container_restart_button").style.display =
        "flex";
    } else if (inputValue > number) {
      setInfoMessage("É menor");
    } else {
      setInfoMessage("É maior");
    }
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

        <div
          class="info_message"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#FF6600",
            fontSize: "16px",
          }}
        >
          {infoMessage}
        </div>
        <div
          style={{
            display: "flex",
            columnGap: "15px",
            justifyContent: "center",
            height: "200px",
          }}
        >
          <div>
            <div id="01-segment-a" class="segment segment-a"></div>
            <div id="01-segment-b" class="segment segment-b"></div>
            <div id="01-segment-c" class="segment segment-c"></div>
            <div id="01-segment-d" class="segment segment-d"></div>
            <div id="01-segment-e" class="segment segment-e"></div>
            <div id="01-segment-f" class="segment segment-f"></div>
            <div id="01-segment-g" class="segment segment-g"></div>
          </div>
          <div>
            <div id="02-segment-a" class="segment segment-a"></div>
            <div id="02-segment-b" class="segment segment-b"></div>
            <div id="02-segment-c" class="segment segment-c"></div>
            <div id="02-segment-d" class="segment segment-d"></div>
            <div id="02-segment-e" class="segment segment-e"></div>
            <div id="02-segment-f" class="segment segment-f"></div>
            <div id="02-segment-g" class="segment segment-g"></div>
          </div>
          <div>
            <div id="03-segment-a" class="segment segment-a"></div>
            <div id="03-segment-b" class="segment segment-b"></div>
            <div id="03-segment-c" class="segment segment-c"></div>
            <div id="03-segment-d" class="segment segment-d"></div>
            <div id="03-segment-e" class="segment segment-e"></div>
            <div id="03-segment-f" class="segment segment-f"></div>
            <div id="03-segment-g" class="segment segment-g"></div>
          </div>
        </div>

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

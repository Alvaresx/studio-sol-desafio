import React, { useState } from "react";
import { handleChangeLed } from "./functions/ChangeLeds";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoMessage from "./components/InfoMessage";
import Leds from "./components/Leds";
import api from "./services/api";
import "./styles/style.css";
function App() {
  const [number, setNumber] = useState(0);
  const [infoMessage, setInfoMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const actionsSendButton = (isDisabled, color) => {
    document.getElementById("container_restart_button").style.visibility =
      "visible";
    document.getElementById("send_button").disabled = isDisabled;
    document.getElementById("guess_input").disabled = isDisabled;
    document.getElementById("info_message").style.color = color;
    setInputValue("");
  };

  async function getNumber() {
    await api
      .get("/rand?min=1&max=300")
      .then((res) => {
        console.log(res.data.value);
        setNumber(res.data.value.toString());
        verifyNumber();
      })
      .catch((err) => {
        handleChangeLed(err.response.data.StatusCode.toString(), "error");
        setInfoMessage("Erro");
        actionsSendButton(true, "#cc3300");
      });
  }

  const verifyNumber = () => {
    if (inputValue === number) {
      setInfoMessage("Você acertou!!!");
      actionsSendButton(true, "#32bf00");
      handleChangeLed(inputValue, "success");
    } else if (inputValue > number) {
      setInfoMessage("É menor");
      handleChangeLed(inputValue, "active");
    } else {
      setInfoMessage("É maior");
      handleChangeLed(inputValue, "active");
    }
    setInputValue("");
  };

  const handleChangeInput = (e) => {
    setInputValue(e);
  };

  const handleNewGame = () => {
    setNumber(0);
    getNumber();
    actionsSendButton(false, "#262a34");
  };

  return (
    <>
      <div id="container">
        <Header />
        <InfoMessage infoMessage={infoMessage} />
        <Leds />
        <Footer
          handleNewGame={handleNewGame}
          handleChangeInput={handleChangeInput}
          verifyNumber={verifyNumber}
          getNumber={getNumber}
          number={number}
          inputValue={inputValue}
        />
      </div>
    </>
  );
}

export default App;

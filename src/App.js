import React, { useEffect, useState } from "react";
import { handleChangeLed } from "./functions/ChangeLeds";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoMessage from "./components/InfoMessage";
import Leds from "./components/Leds";
import api from "./services/api";
import "./styles/style.css";

function App() {
  const [number, setNumber] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getNumber();
  }, []);

  async function getNumber() {
    await api
      .get("/rand?min=1&max=300")
      .then((res) => {
        setNumber(res.data.value);
      })
      .catch((err) => {
        handleChangeLed(err.response.data.StatusCode, "error");
        setInfoMessage("Erro");
        actionsSendButton(true, "#cc3300", "visible");
      });
  }

  const actionsSendButton = (isDisabled, color, visibility) => {
    document.getElementById("container_restart_button").style.visibility =
      visibility;
    document.getElementById("send_button").disabled = isDisabled;
    document.getElementById("guess_input").disabled = isDisabled;
    document.getElementById("info_message").style.color = color;
    setInputValue("");
  };

  const verifyNumber = () => {
    if (inputValue !== "") {
      if (inputValue === number) {
        setInfoMessage("Você acertou!");
        actionsSendButton(true, "#32bf00", "visible");
        handleChangeLed(inputValue, "success");
      } else if (inputValue > number) {
        setInfoMessage("É menor");
        handleChangeLed(inputValue, "active");
      } else {
        setInfoMessage("É maior");
        handleChangeLed(inputValue, "active");
      }
    } else {
      document.getElementById("guess_input").classList.add("guess_input_error");
    }

    setInputValue("");
  };

  const handleChangeInput = (e) => {
    if (e === "") {
      setInputValue(e);
    } else {
      setInputValue(parseInt(e));
    }

    document
      .getElementById("guess_input")
      .classList.remove("guess_input_error");
  };

  const handleNewGame = () => {
    setNumber("");
    setInfoMessage("");
    actionsSendButton(false, "#262a34", "hidden");
    handleChangeLed("0", "active");
    getNumber();
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

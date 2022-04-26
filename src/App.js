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

  async function getNumber() {
    await api
      .get("/rand?min=1&max=300")
      .then((res) => {
        console.log(res.data.value);
        setNumber(res.data.value.toString());
        verifyNumber();
      })
      .catch((err) => {
        console.log(err.response.data);
        handleChangeLed(err.response.data.StatusCode.toString(), "error");
        setInfoMessage(err.response.data.Error);
        document.getElementById("info_message").style.color = "#cc3300";
        document.getElementById("container_restart_button").style.display =
          "flex";
        document.getElementById("send_button").disabled = true;
        document.getElementById("guess_input").disabled = true;
      });
  }

  const verifyNumber = () => {
    if (inputValue === number) {
      setInfoMessage("Você acertou!!!");
      document.getElementById("send_button").disabled = true;
      document.getElementById("guess_input").disabled = true;
      document.getElementById("container_restart_button").style.display =
        "flex";
      document.getElementById("info_message").style.color = "#32bf00";
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
    document.getElementById("send_button").disabled = false;
    document.getElementById("guess_input").disabled = false;
    document.getElementById("container_restart_button").style.display = "none";
  };

  return (
    <>
      <div class="container">
        <Header />
        <InfoMessage infoMessage={infoMessage} />
        <Leds />
        <Footer
          handleNewGame={handleNewGame}
          handleChangeInput={handleChangeInput}
          verifyNumber={verifyNumber}
          getNumber={getNumber}
          number={number}
        />
      </div>
    </>
  );
}

export default App;

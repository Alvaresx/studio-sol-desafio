import React, { useEffect, useState } from "react";
import * as Styled from "./styles/style";
import GlobalStyle from "./styles/GlobalStyle";
import { colors } from "./styles/colors";
import { handleChangeLed } from "./functions/ChangeLeds";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoMessage from "./components/InfoMessage";
import Leds from "./components/Leds";
import api from "./services/api";

function App() {
  const { error, success, textInfoMessage } = colors;
  const [number, setNumber] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputClassError, setInputClassError] = useState("");
  const [textColor, setTextColor] = useState(textInfoMessage);
  const [visibility, setVisibility] = useState("hidden");
  const [arrayActive, setArrayActive] = useState([
    {
      a: "active",
      b: "active",
      c: "active",
      d: "active",
      e: "active",
      f: "active",
      g: "not_active",
    },
  ]);

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
        setArrayActive(handleChangeLed(err.response.data.StatusCode, "error"));
        setInfoMessage("Erro");
        actionsSendButton(true, error, "visible");
      });
  }

  const actionsSendButton = (isDisabled, color, visibility) => {
    setVisibility(visibility);
    setIsDisabled(isDisabled);
    setTextColor(color);
    setInputValue("");
  };

  const verifyNumber = () => {
    if (inputValue !== "") {
      if (inputValue === number) {
        setInfoMessage("Você acertou!");
        actionsSendButton(true, success, "visible");
        setArrayActive(handleChangeLed(inputValue, "success"));
      } else if (inputValue > number) {
        setInfoMessage("É menor");
        setArrayActive(handleChangeLed(inputValue, "active"));
      } else {
        setInfoMessage("É maior");
        setArrayActive(handleChangeLed(inputValue, "active"));
      }
    } else {
      setInputClassError("guess_input_error");
    }
    setInputValue("");
  };

  const handleChangeInput = (e) => {
    setInputClassError("");
    if (e === "") {
      setInputValue(e);
    } else {
      setInputValue(parseInt(e));
    }
  };

  const handleNewGame = () => {
    setNumber("");
    setInfoMessage("");
    actionsSendButton(false, textInfoMessage, "hidden");
    setArrayActive(handleChangeLed("0", "active"));
    getNumber();
  };

  return (
    <>
      <GlobalStyle />
      <Styled.Container>
        <Header />
        <InfoMessage infoMessage={infoMessage} textColor={textColor} />
        <Leds arrayActive={arrayActive} />
        <Footer
          handleNewGame={handleNewGame}
          handleChangeInput={handleChangeInput}
          verifyNumber={verifyNumber}
          inputValue={inputValue}
          isDisabled={isDisabled}
          inputClassError={inputClassError}
          visibility={visibility}
        />
      </Styled.Container>
    </>
  );
}

export default App;

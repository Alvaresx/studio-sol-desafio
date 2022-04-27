import {
  findAllByTestId,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "../App";

describe("App.js", () => {
  test("should render an info message when click in the send button ant the input value is diferent than empty", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
    const sendButtonElement = screen.getByText(/Enviar/i);
    const infoMessageElement = screen.getByTestId("info_message");
    userEvent.type(inputElement, "123");
    userEvent.click(sendButtonElement);
    expect(infoMessageElement).not.toHaveTextContent("");
  });

  test("should not render an info message when click in the send button ant the input value is empty", () => {
    render(<App />);
    const sendButtonElement = screen.getByText(/Enviar/i);
    const infoMessageElement = screen.getByTestId("info_message");
    userEvent.click(sendButtonElement);
    expect(infoMessageElement).toHaveTextContent("");
  });
});

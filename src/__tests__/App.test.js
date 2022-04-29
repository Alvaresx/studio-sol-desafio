import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const getSegments = (number, arrayActive) => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
  const sendButtonElement = screen.getByText(/Enviar/i);
  const segmentA = screen.getByTestId("segment_a");
  const segmentB = screen.getByTestId("segment_b");
  const segmentC = screen.getByTestId("segment_c");
  const segmentD = screen.getByTestId("segment_d");
  const segmentE = screen.getByTestId("segment_e");
  const segmentF = screen.getByTestId("segment_f");
  const segmentG = screen.getByTestId("segment_g");
  userEvent.type(inputElement, number);
  userEvent.click(sendButtonElement);
  expect(segmentA).toHaveClass(arrayActive[0]);
  expect(segmentB).toHaveClass(arrayActive[1]);
  expect(segmentC).toHaveClass(arrayActive[2]);
  expect(segmentD).toHaveClass(arrayActive[3]);
  expect(segmentE).toHaveClass(arrayActive[4]);
  expect(segmentF).toHaveClass(arrayActive[5]);
  expect(segmentG).toHaveClass(arrayActive[6]);
};

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

  test("should add the guess_input_error class in the input in case of error", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
    const sendButtonElement = screen.getByText(/Enviar/i);
    userEvent.click(sendButtonElement);
    expect(inputElement).toHaveClass("guess_input_error");
  });

  test("should reset the input value when click in the send button", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
    const sendButtonElement = screen.getByText(/Enviar/i);
    userEvent.type(inputElement, "123");
    userEvent.click(sendButtonElement);
    expect(inputElement.value).toBe("");
  });

  test("should remove the guess_input_error class from the input when start typing", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
    const sendButtonElement = screen.getByText(/Enviar/i);
    userEvent.click(sendButtonElement);
    userEvent.type(inputElement, "1234");
    expect(inputElement).not.toHaveClass("guess_input_error");
  });

  test("should render the correct amount of leds based on the value entered by the user", () => {
    const { container } = render(<App />);
    const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
    const sendButtonElement = screen.getByText(/Enviar/i);
    const divsSegments = container.getElementsByClassName("segment_a");
    userEvent.type(inputElement, "123");
    userEvent.click(sendButtonElement);
    expect(divsSegments.length).toBe(3);
  });

  test("should render the number one on the leds", () => {
    let array01 = [
      "not_active",
      "active",
      "active",
      "not_active",
      "not_active",
      "not_active",
      "not_active",
    ];
    getSegments("1", array01);
  });

  test("should render the number two on the leds", () => {
    let array02 = [
      "active",
      "active",
      "not_active",
      "active",
      "active",
      "not_active",
      "active",
    ];
    getSegments("2", array02);
  });

  test("should render the number three on the leds", () => {
    let array03 = [
      "active",
      "active",
      "active",
      "active",
      "not_active",
      "not_active",
      "active",
    ];
    getSegments("3", array03);
  });

  test("should render the number four on the leds", () => {
    let array04 = [
      "not_active",
      "active",
      "active",
      "not_active",
      "not_active",
      "active",
      "active",
    ];
    getSegments("4", array04);
  });

  test("should render the number five on the leds", () => {
    let array05 = [
      "active",
      "not_active",
      "active",
      "active",
      "not_active",
      "active",
      "active",
    ];
    getSegments("5", array05);
  });

  test("should render the number six on the leds", () => {
    let array06 = [
      "active",
      "not_active",
      "active",
      "active",
      "active",
      "active",
      "active",
    ];
    getSegments("6", array06);
  });

  test("should render the number seven on the leds", () => {
    let array07 = [
      "active",
      "active",
      "active",
      "not_active",
      "not_active",
      "not_active",
      "not_active",
    ];
    getSegments("7", array07);
  });

  test("should render the number eight on the leds", () => {
    let array08 = [
      "active",
      "active",
      "active",
      "active",
      "active",
      "active",
      "active",
    ];
    getSegments("8", array08);
  });

  test("should render the number nine on the leds", () => {
    let array09 = [
      "active",
      "active",
      "active",
      "not_active",
      "not_active",
      "active",
      "active",
    ];
    getSegments("9", array09);
  });

  test("should render the number zero on the leds", () => {
    let array00 = [
      "active",
      "active",
      "active",
      "active",
      "active",
      "active",
      "not_active",
    ];
    getSegments("0", array00);
  });
});

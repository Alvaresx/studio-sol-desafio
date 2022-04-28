import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const getSegments = (number, arrayActive) => {
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
    render(<App />);
    let array = [
      "active",
      "active",
      "active",
      "not_active",
      "not_active",
      "not_active",
      "not_active",
    ];
    getSegments("1", array);
  });

  test("should render the number two on the leds", () => {
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
    userEvent.type(inputElement, "2");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("active");
    expect(segmentB).toHaveClass("active");
    expect(segmentC).toHaveClass("not_active");
    expect(segmentD).toHaveClass("active");
    expect(segmentE).toHaveClass("active");
    expect(segmentF).toHaveClass("not_active");
    expect(segmentG).toHaveClass("active");
  });

  test("should render the number three on the leds", () => {
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
    userEvent.type(inputElement, "3");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("active");
    expect(segmentB).toHaveClass("active");
    expect(segmentC).toHaveClass("active");
    expect(segmentD).toHaveClass("active");
    expect(segmentE).toHaveClass("not_active");
    expect(segmentF).toHaveClass("not_active");
    expect(segmentG).toHaveClass("active");
  });

  test("should render the number four on the leds", () => {
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
    userEvent.type(inputElement, "4");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("not_active");
    expect(segmentB).toHaveClass("active");
    expect(segmentC).toHaveClass("active");
    expect(segmentD).toHaveClass("not_active");
    expect(segmentE).toHaveClass("not_active");
    expect(segmentF).toHaveClass("active");
    expect(segmentG).toHaveClass("active");
  });

  test("should render the number five on the leds", () => {
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
    userEvent.type(inputElement, "5");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("active");
    expect(segmentB).toHaveClass("not_active");
    expect(segmentC).toHaveClass("active");
    expect(segmentD).toHaveClass("active");
    expect(segmentE).toHaveClass("not_active");
    expect(segmentF).toHaveClass("active");
    expect(segmentG).toHaveClass("active");
  });

  test("should render the number six on the leds", () => {
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
    userEvent.type(inputElement, "6");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("active");
    expect(segmentB).toHaveClass("not_active");
    expect(segmentC).toHaveClass("active");
    expect(segmentD).toHaveClass("active");
    expect(segmentE).toHaveClass("active");
    expect(segmentF).toHaveClass("active");
    expect(segmentG).toHaveClass("active");
  });

  test("should render the number seven on the leds", () => {
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
    userEvent.type(inputElement, "7");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("active");
    expect(segmentB).toHaveClass("active");
    expect(segmentC).toHaveClass("active");
    expect(segmentD).toHaveClass("not_active");
    expect(segmentE).toHaveClass("not_active");
    expect(segmentF).toHaveClass("not_active");
    expect(segmentG).toHaveClass("not_active");
  });

  test("should render the number eight on the leds", () => {
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
    userEvent.type(inputElement, "8");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("active");
    expect(segmentB).toHaveClass("active");
    expect(segmentC).toHaveClass("active");
    expect(segmentD).toHaveClass("active");
    expect(segmentE).toHaveClass("active");
    expect(segmentF).toHaveClass("active");
    expect(segmentG).toHaveClass("active");
  });

  test("should render the number nine on the leds", () => {
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
    userEvent.type(inputElement, "9");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("active");
    expect(segmentB).toHaveClass("active");
    expect(segmentC).toHaveClass("active");
    expect(segmentD).toHaveClass("not_active");
    expect(segmentE).toHaveClass("not_active");
    expect(segmentF).toHaveClass("active");
    expect(segmentG).toHaveClass("active");
  });

  test("should render the number zero on the leds", () => {
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
    userEvent.type(inputElement, "0");
    userEvent.click(sendButtonElement);
    expect(segmentA).toHaveClass("active");
    expect(segmentB).toHaveClass("active");
    expect(segmentC).toHaveClass("active");
    expect(segmentD).toHaveClass("active");
    expect(segmentE).toHaveClass("active");
    expect(segmentF).toHaveClass("active");
    expect(segmentG).toHaveClass("not_active");
  });
});

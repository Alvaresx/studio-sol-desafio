import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../components/Footer";

const mockedHandleChangeInput = jest.fn();
const mockedVerifyNumber = jest.fn();

describe("Footer.js", () => {
  test("should render an input", () => {
    render(<Footer />);
    const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should render a send button", () => {
    render(<Footer />);
    const sendButtonElement = screen.getByText(/Enviar/i);
    expect(sendButtonElement).toBeInTheDocument();
  });

  test("should allow typing in input", () => {
    render(<Footer handleChangeInput={mockedHandleChangeInput} />);
    const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
    userEvent.type(inputElement, "123");
    expect(inputElement.value).toBe("123");
  });

  test("should accept only 3 digits in the input", () => {
    render(<Footer handleChangeInput={mockedHandleChangeInput} />);
    const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
    userEvent.type(inputElement, "1234");
    expect(inputElement.value).toBe("123");
  });

  test("should call the verifyNumber function when click on the send button", () => {
    render(<Footer verifyNumber={mockedVerifyNumber} />);
    const sendButtonElement = screen.getByText(/Enviar/i);
    userEvent.click(sendButtonElement);
    expect(mockedVerifyNumber).toHaveBeenCalledTimes(1);
  });

  //   ------------------------------------------------

//   test("should call the verifyNumber function when click on the send button", () => {
//     const { container } = render(<Footer handleChangeInput={mockedHandleChangeInput} />);
//     const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
//     const sendButtonElement = screen.getByText(/Enviar/i);
//     userEvent.type(inputElement, "1");
//     userEvent.click(sendButtonElement);
//     expect(container.getElementsByClassName("segment").length).toBe(7);
//   });

  //   test("should reset the input value when click on send button", () => {
  //     render(<Footer handleChangeInput={mockedHandleChangeInput} />);
  //     const inputElement = screen.getByPlaceholderText(/Digite o palpite/i);
  //     const sendButtonElement = screen.getByText(/Enviar/i);
  //     userEvent.type(inputElement, "123");
  //     userEvent.click(sendButtonElement);
  //     expect(inputElement.value).toBe("");
  //   });
});

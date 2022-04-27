import { render, screen } from "@testing-library/react";
import InfoMessage from "../components/InfoMessage";

describe("InfoMessage.js", () => {
  test("should render the info message", () => {
    render(<InfoMessage infoMessage="Info Message" />);
    const infoMessageElement = screen.getByText(/Info Message/i);
    expect(infoMessageElement).toBeInTheDocument();
  });
});
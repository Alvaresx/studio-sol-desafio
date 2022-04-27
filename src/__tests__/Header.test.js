import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header.js", () => {
  test("should render the title", () => {
    render(<Header />);
    const titleElement = screen.getByText(/Qual é o número?/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("should render a divider", () => {
    render(<Header />);
    const dividerElement = screen.getByTestId("divider");
    expect(dividerElement).toBeInTheDocument();
  });
});

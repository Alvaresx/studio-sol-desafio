import { render } from "@testing-library/react";
import Leds from "../components/Leds";

describe("Leds.js", () => {
  test("should render a div whit seven segments when start the game", () => {
    const { container } = render(<Leds />);
    expect(container.getElementsByClassName("segment").length).toBe(7);
  });

  test("should contain six active segments showing the number zero when start the game", () => {
    const { container } = render(<Leds />);
    expect(container.getElementsByClassName("active").length).toBe(6);
  });
});

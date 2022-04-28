import { render } from "@testing-library/react";
import Leds from "../components/Leds";

const arrayActive = [
  {
    a: "active",
    b: "active",
    c: "active",
    d: "active",
    e: "active",
    f: "active",
    g: "not_active",
  },
];

describe("Leds.js", () => {
  test("should contain six active segments showing the number zero when start the game", () => {
    const { container } = render(<Leds arrayActive={arrayActive} />);
    expect(container.getElementsByClassName("active").length).toBe(6);
  });
});

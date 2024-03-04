import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Weather from "@/app/weather/page";

describe("Home", () => {
  it("matches to Home snapshot", () => {
    let home = render(<Home />)

    expect(home).toMatchSnapshot()
  });

  it("renders images in the Home component", () => {
    render(<Home />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  it("renders figure in the Home component", () => {
    render(<Home />);
    const figure = screen.getAllByRole("figure");
    expect(figure.length).toBeGreaterThan(0);
  });
});
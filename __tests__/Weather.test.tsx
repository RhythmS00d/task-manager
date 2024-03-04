import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Weather from "@/app/weather/page";

describe("Weather", () => {
  it("matches snapshot", async () => {
    let weather = render(<Weather />);

    expect(weather).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import Home from "../app/page";

it("should have Home Page text", () => {
  render(<Home />);

  const homeText = screen.getByText("Home Page");
  expect(homeText).toBeInTheDocument();
});

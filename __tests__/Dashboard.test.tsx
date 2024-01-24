import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("should have 'Welcome To Cricket Stats Dashboard!' text", () => {
    render(<Home />);

    const homeText = screen.getByText("Welcome To Cricket Stats Dashboard!");
    expect(homeText).toBeInTheDocument();
  });
});


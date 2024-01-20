import { screen, render } from "@testing-library/react";
import Login from "../app/login/page";

describe("Login", () => {
  it("should have 'Log In!' text", () => {
    render(<Login />);

    const homeText = screen.getByText("Log In!");
    expect(homeText).toBeInTheDocument();
  });
});

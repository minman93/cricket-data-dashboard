import { render, screen } from "@testing-library/react";
import AllPlayers from "../app/players/page";

describe("All Players", () => {
  it("should have All Players text", async () => {
    render(<AllPlayers />);

    const homeText = screen.getByText("All Players!");
    expect(homeText).toBeInTheDocument();
  });
});

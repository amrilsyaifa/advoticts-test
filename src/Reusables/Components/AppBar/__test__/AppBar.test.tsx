import React from "react";
import { render, screen } from "@testing-library/react";
import AppBar from "../AppBar";

describe("renders AppBar", () => {
  test("renders Logo", () => {
    render(<AppBar />);
    const logoImage = screen.getByTestId("advotics-logo");
    expect(logoImage).toBeInTheDocument();
  });
});

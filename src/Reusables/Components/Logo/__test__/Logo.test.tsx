import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "../Logo";

test("renders Logo", () => {
  render(<Logo />);
  const logoImage = screen.getByTestId("advotics-logo");
  expect(logoImage).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import InfoBar from "../InfoBar";

test("renders InfoBar", () => {
  render(<InfoBar title={"Title"} />);
  const title = screen.getByText("Title");
  expect(title).toBeInTheDocument();
});

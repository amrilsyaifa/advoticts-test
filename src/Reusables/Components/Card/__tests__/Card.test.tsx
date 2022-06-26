import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Card";

test("renders Card", () => {
  const Component = (
    <Card>
      <div>body</div>
    </Card>
  );
  render(Component);
  const body = screen.getByText("body");
  expect(body).toBeInTheDocument();
});

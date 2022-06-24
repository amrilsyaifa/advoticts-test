import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../Layout";

test("renders Layout", () => {
  const Component = (
    <Layout>
      <div>Render Child</div>
    </Layout>
  );
  render(Component);
  const logoImage = screen.getByText("Render Child");
  expect(logoImage).toBeInTheDocument();
});

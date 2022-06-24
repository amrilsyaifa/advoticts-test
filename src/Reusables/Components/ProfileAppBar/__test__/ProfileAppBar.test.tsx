import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileAppBar from "../ProfileAppBar";

test("renders ProfileAppBar", () => {
  const onCLickLogout = jest.fn();
  render(
    <ProfileAppBar
      name="Test Name"
      companyName="Company Name"
      url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
      onClick={onCLickLogout}
    />
  );
  const nameText = screen.getByText("Test Name");
  expect(nameText).toBeInTheDocument();
  const companyText = screen.getByText("Company Name");
  expect(companyText).toBeInTheDocument();
  const pressLogout = screen.getByTestId("btn-logout");
  fireEvent.click(pressLogout);
  expect(onCLickLogout).toBeCalled();
});

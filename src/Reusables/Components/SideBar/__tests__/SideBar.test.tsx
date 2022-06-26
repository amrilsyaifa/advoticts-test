import React from "react";
import { render } from "@testing-library/react";
import SideBar from "../SideBar";
import DataListMenu from "../Constant.Sidebar";

describe("renders SideBar", () => {
  test("Get Title", () => {
    const { container } = render(<SideBar />);
    const classData = container.getElementsByClassName("sidebar-list");
    expect(classData).toHaveLength(DataListMenu.length);
  });
});

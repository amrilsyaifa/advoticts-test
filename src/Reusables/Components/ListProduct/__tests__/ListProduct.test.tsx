import React from "react";
import { render, screen } from "@testing-library/react";
import ListProduct from "../ListProduct";

describe("renders ListProduct", () => {
  test("Get Title", () => {
    render(<ListProduct title={"title"} data={[]} />);
    const title = screen.getByText("title");
    expect(title).toBeInTheDocument();
  });
  test("Empty Data", () => {
    const { container } = render(<ListProduct title={"title"} data={[]} />);
    const classData = container.getElementsByClassName("class");
    expect(classData).toHaveLength(0);
  });
  test("Empty With Data", () => {
    const tempData = [
      {
        id: "aksjd",
        key: "aq",
        name: "Aqua",
        url: "https://aqua.co.id/uploads/2018/07/5b484e54f18ff_1531465300.png",
        quantitySell: 100,
        price: 18000,
        date: "25-06-2022",
      },
    ];
    const { container } = render(
      <ListProduct title={"title"} data={tempData} />
    );
    const classData = container.getElementsByClassName("class");
    expect(classData).toHaveLength(tempData.length);
  });
});

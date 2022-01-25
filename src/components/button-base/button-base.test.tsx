// Generated with util/create-component.js
  
import React from "react";
import { render } from "@testing-library/react";

import ButtonBase from "./button-base";

describe("ButtonBase", () => {


  const renderComponent = () => render(<ButtonBase 
    onClick= {()=>alert('clicked')}
    children="button"
  />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByText } = renderComponent();

    // Assert

    expect(getByText("button")).toBeDefined();
  });
});


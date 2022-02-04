// Generated with util/create-component.js
  
import React from "react";
import { render } from "@testing-library/react";

import ButtonDanger from "./button-danger";

describe("ButtonDanger", () => {


  const renderComponent = () => render(<ButtonDanger/>);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("button-danger");
    expect(component).toBeDefined();
  });
});


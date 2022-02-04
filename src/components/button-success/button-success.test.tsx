// Generated with util/create-component.js
  
import React from "react";
import { render } from "@testing-library/react";

import ButtonSuccess from "./button-success";

describe("ButtonSuccess", () => {


  const renderComponent = () => render(<ButtonSuccess/>);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("button-success");
    expect(component).toBeDefined();
  });
});


// Generated with util/create-component.js
  
import React from "react";
import { render } from "@testing-library/react";

import ButtonWarning from "./button-warning";

describe("ButtonWarning", () => {


  const renderComponent = () => render(<ButtonWarning/>);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("button-warning");
    expect(component).toBeDefined();
  });
});


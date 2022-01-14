// Generated with util/create-component.js
  
import React from "react";
import { render } from "@testing-library/react";

import Black from "../black";

describe("Black", () => {

  

  const renderComponent = () => render(<Black />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("black");
    expect(component).toBeDefined();
  });
});


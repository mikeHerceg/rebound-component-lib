// Generated with util/create-component.js
  
import React from "react";
import { render } from "@testing-library/react";

import Card from "./card";

describe("Card", () => {


  const renderComponent = () => render(<Card/>);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("card");
    expect(component).toBeDefined();
  });
});


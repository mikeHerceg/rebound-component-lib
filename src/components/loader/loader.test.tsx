// Generated with util/create-component.js
  
import React from "react";
import { render } from "@testing-library/react";

import Loader from "./loader";

describe("Loader", () => {


  const renderComponent = () => render(<Loader/>);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("loader");
    expect(component).toBeDefined();
  });
});


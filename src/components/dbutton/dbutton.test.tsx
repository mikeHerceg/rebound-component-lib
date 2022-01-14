// Generated with util/create-component.js
  
import React from "react";
import { render } from "@testing-library/react";

import Dbutton from "../dbutton";

describe("Dbutton", () => {


  const renderComponent = () => render(<Dbutton/>);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("dbutton");
    expect(component).toBeDefined();
  });
});


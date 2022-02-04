import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonBase from "../button-base";

export default {
  title: "Components/Button Base",
  component: ButtonBase,
  argTypes: {}
} as ComponentMeta<typeof ButtonBase>;

const Template: ComponentStory<typeof ButtonBase> = args => (
  <ButtonBase {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  className: "",
  disabled: false,
  children: "button base",
  onClick: () => console.log("clicked")
};

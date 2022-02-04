import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonDanger from "../button-danger";

export default {
  title: "Components/Button Danger",
  component: ButtonDanger,
  argTypes: {}
} as ComponentMeta<typeof ButtonDanger>;

const Template: ComponentStory<typeof ButtonDanger> = args => (
  <ButtonDanger {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  children: "button danger",
  onClick: () => alert("clicked")
};

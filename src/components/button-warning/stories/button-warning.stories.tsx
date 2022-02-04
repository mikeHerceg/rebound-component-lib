import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonWarning from "../button-warning";

export default {
  title: "Components/Button Warning",
  component: ButtonWarning,
  argTypes: {}
} as ComponentMeta<typeof ButtonWarning>;

const Template: ComponentStory<typeof ButtonWarning> = args => (
  <ButtonWarning {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  children: "button warning",
  onClick: () => alert("clicked")
};

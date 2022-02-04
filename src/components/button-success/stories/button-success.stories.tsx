import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonSuccess from "../button-success";

export default {
  title: "Components/Button Success",
  component: ButtonSuccess,
  argTypes: {}
} as ComponentMeta<typeof ButtonSuccess>;

const Template: ComponentStory<typeof ButtonSuccess> = args => (
  <ButtonSuccess {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  children: "button success",
  onClick: () => alert("clicked")
};

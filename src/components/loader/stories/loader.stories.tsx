import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loader from "../loader";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {}
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  dotCount: 5
};

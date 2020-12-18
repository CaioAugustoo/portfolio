import Darkthemebutton from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Darkthemebutton",
  component: Darkthemebutton,
} as Meta;

export const Basic: Story = (args) => (
  <Darkthemebutton id="sc-kSka" {...args} />
);

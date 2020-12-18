import Buttons from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Buttons",
  component: Buttons,
} as Meta;

export const Basic: Story = (args) => <Buttons {...args} />;
Basic.args = { children: "SOBRE MIM" };

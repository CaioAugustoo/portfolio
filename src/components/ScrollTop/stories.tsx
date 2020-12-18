import ScrollTop from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "ScrollTop",
  component: ScrollTop,
} as Meta;

export const Basic: Story = (args) => <ScrollTop {...args} />;

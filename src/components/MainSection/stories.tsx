import Main from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Main",
  component: Main,
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

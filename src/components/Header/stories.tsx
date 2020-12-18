import Header from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Header",
  component: Header,
} as Meta;

export const Basic: Story = (args) => <Header {...args} />;

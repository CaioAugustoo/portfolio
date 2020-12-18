import PortfolioItems from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "PortfolioItems",
  component: PortfolioItems,
} as Meta;

export const Basic: Story = (args) => <PortfolioItems {...args} />;

import PortfolioSection from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "PortfolioSection",
  component: PortfolioSection,
} as Meta;

export const Basic: Story = (args) => <PortfolioSection {...args} />;

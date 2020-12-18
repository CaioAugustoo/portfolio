import AboutSection from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "AboutSection",
  component: AboutSection,
} as Meta;

export const Basic: Story = (args) => <AboutSection {...args} />;

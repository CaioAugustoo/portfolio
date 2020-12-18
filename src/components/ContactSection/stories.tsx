import ContactSection from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "ContactSection",
  component: ContactSection,
} as Meta;

export const Basic: Story = (args) => <ContactSection {...args} />;

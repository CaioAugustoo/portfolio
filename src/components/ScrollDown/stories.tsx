import ScrollDown from ".";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
title: "ScrollDown",
component: ScrollDown,
} as Meta;

export const Basic: Story = (args) =>
<ScrollDown {...args} />;
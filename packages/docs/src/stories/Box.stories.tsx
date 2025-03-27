import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps } from "@alef-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <p>Testando o elemento Box</p>,
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

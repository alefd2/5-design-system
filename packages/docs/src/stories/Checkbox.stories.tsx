import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, Checkbox, CheckboxProps } from "@alef-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          style={{ display: "flex", flexDirection: "row", gap: "8px" }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

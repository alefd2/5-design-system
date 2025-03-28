import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],
  docs: {
    autodocs: true,
    inlineStories: true,
  },
  addons: [
    {
      name: getAbsolutePath("@storybook/addon-essentials"),
      options: { docs: false },
    },
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: ["react", "react-dom"],
    };
    return config;
  },
};

export default config;

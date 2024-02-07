import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [ 
    "../src/**/*.stories.@(js|jsx|ts|tsx)", 
    "../src/components/*.stories.@(js|jsx|ts|tsx)"
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    legacyMdx1: true, 
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "storybook-addon-pseudo-states",
    "storybook-addon-themes",
    "storybook-addon-react-docgen"
  ],
  docs: {
    autodocs: "tag",
  },
};

export default config;

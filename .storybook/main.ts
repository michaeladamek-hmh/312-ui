import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [ 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", 
    "../src/components/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  features: {
    legacyMdx1: true, 
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "storybook-addon-pseudo-states"
  ],
  docs: {
    autodocs: "tag",
  },
};

export default config;

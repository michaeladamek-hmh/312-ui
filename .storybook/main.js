/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite';

const config = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [ 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", 
    "../src/components/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "storybook-addon-pseudo-states"
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;

/** @type { import('@storybook/react').Preview } */

// const { addDecorator } = require('@storybook/react');
// const { withPropsTable } = require('storybook-addon-react-docgen');

// addDecorator(withPropsTable);

import '../src/assets/scss/source.scss';
import '../src/assets/scss/custom.scss';

export const parameters = {
  themes: {
    default: 'Grade 3-5',
    list: [
      {
        name: 'Grade 3-5',
        class: 'g35',
      },
      {
        name: 'Grade 6-8',
        class: 'g68',
      },
      {
        name: 'Grade 9-12',
        class: 'g912',
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { Accordion } from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion',
  tags: ['autodocs'],
};

export const Default = (args) => <Accordion {...args} />;
export const Color = (args) => <Accordion {...args} />;
export const Divider = (args) => <Accordion {...args} />;

Default.args = {
  title: 'Accordion Title',
  content:
    'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
  variant: 'default',
  grade: 'g35',
};

Color.args = {
  ...Default.args,
  variant: 'color',
};

Divider.args = {
  ...Default.args,
  variant: 'divider',
};

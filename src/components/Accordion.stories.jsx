import { Accordion } from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion',
  tags: ['autodocs']
}

export const Default = args => <Accordion {...args} />;
export const Color = args => <Accordion {...args} />;
export const Divider = args => <Accordion {...args} />;

Default.args = {
  variant: 'default',
  grade: 'g35'
}

Color.args = {
  variant: 'color',
  grade: 'g35'
}

Divider.args = {
  variant: 'divider',
  grade: 'g35'
}
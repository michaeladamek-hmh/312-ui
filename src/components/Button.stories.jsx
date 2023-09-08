import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export const Primary = args => <Button {...args} />;
export const Secondary = args => <Button {...args} />;

Primary.args = {
  grade: 'g35',
  label: "Check",
  primary: true,
  disabled: false
}

Secondary.args = {
  ...Primary.args,
  primary: false
}
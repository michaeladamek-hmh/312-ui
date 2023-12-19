import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/sYNh2CVOzu9zZZTrXBSneQ/3-12-UI-Starter-Kit?type=design&node-id=211%3A415&mode=design&t=z4LY8YuPxNCuOJbM-1'
    }
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
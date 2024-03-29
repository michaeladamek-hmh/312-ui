import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/9iretC8KPFzFM1RfV4Cezm/3-12-UI-system?type=design&node-id=583%3A5057&mode=dev',
    },
  },
};

export const Primary = (args) => <Button {...args} />;
export const Secondary = (args) => <Button {...args} />;

Primary.args = {
  children: 'Check',
  primary: true,
  disabled: false,
};

Secondary.args = {
  ...Primary.args,
  primary: false,
};

import { InputBox } from './InputBox';

export default {
  component: InputBox,
  title: 'Input Box',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export const Default = args => <InputBox {...args} />;
export const Checked = args => <InputBox {...args} />;
export const Correct = args => <InputBox {...args} />;
export const Incorrect = args => <InputBox {...args} />;
export const Disabled = args => <InputBox {...args} />;

Default.args = {
  type: 'checkbox',
  id: 'answer',
  name: 'input',
  value: 'The mouse rides a bike',
  correct: false,
  incorrect: false,
  checked: false,
  disabled: false,
  label: 'The mouse rides a bike',
	grade: 'g35'
}

Checked.args = {
  ...Default.args,
  checked: true
}

Correct.args = {
  ...Default.args,
  checked: true,
  disabled: true,
  correct: true
}

Incorrect.args = {
  ...Default.args,
  checked: true,
  incorrect: true
}

Disabled.args = {
  ...Default.args,
  disabled: true
}
 
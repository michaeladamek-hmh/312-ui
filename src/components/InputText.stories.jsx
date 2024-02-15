import { InputText } from './InputText';

export default {
  component: InputText,
  title: 'Input Text',
  tags: ['autodocs'],
};

export const Default = (args) => <InputText {...args} />;
export const Correct = (args) => <InputText {...args} />;
export const InCorrect = (args) => <InputText {...args} />;
export const Disabled = (args) => <InputText {...args} />;

Default.args = {
  correct: false,
  incorrect: false,
  value: '',
  disabled: false,
  grade: 'g35',
};

Correct.args = {
  ...Default.args,
  correct: true,
  value: 'answer',
  disabled: true,
};

InCorrect.args = {
  ...Default.args,
  incorrect: true,
  value: 'answer',
};

Disabled.args = {
  ...Default.args,
  value: 'answer',
  disabled: true,
};

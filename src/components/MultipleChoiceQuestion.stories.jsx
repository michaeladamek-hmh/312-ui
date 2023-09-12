import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';

export default {
  component: MultipleChoiceQuestion,
  title: 'MCQ',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export const Default = args => <MultipleChoiceQuestion {...args} />;
export const Checked = args => <MultipleChoiceQuestion {...args} />;
export const Correct = args => <MultipleChoiceQuestion {...args} />;
export const Incorrect = args => <MultipleChoiceQuestion {...args} />;
export const Disabled = args => <MultipleChoiceQuestion {...args} />;

Default.args = {
  type: 'checkbox',
  image: false,
  id: 'answer',
  name: 'mcq',
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
 
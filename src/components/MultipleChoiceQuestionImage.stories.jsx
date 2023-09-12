import { MultipleChoiceQuestionImage } from './MultipleChoiceQuestionImage';

export default {
  component: MultipleChoiceQuestionImage,
  title: 'MCQ Image',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export const Default = args => <MultipleChoiceQuestionImage {...args} />;
export const Checked = args => <MultipleChoiceQuestionImage {...args} />;
export const Correct = args => <MultipleChoiceQuestionImage {...args} />;
export const Incorrect = args => <MultipleChoiceQuestionImage {...args} />;
export const Disabled = args => <MultipleChoiceQuestionImage {...args} />;

Default.args = {
  type: 'checkbox',
  image: true,
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
 
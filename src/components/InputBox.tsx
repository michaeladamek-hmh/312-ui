export type InputBoxProps = {
  type: 'checkbox' | 'radio',
  id: string,
  name: string,
  value: string,
  checked: boolean,
  disabled: boolean,
  correct: boolean,
  incorrect: boolean,
  children: React.ReactElement,
}

export function InputBox({ type, id, value, name, checked, disabled, correct, incorrect, children }: InputBoxProps) {
	const isCorrect = correct ? 'correct' : '';
	const isIncorrect = incorrect ? 'incorrect' : '';

  return (
    <>
      <input 
        type={ type }
        id={ id }
        className={` ${isCorrect} ${isIncorrect}`}
        value={ value }
        name={ name }
        defaultChecked={ checked }
        disabled={ disabled }
      />
      <label
        htmlFor={ id }
      >
        { children }
      </label>
    </>
  )
}
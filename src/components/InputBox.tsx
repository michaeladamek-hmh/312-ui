// import PropTypes from 'prop-types';

// InputBox.propTypes = {
//   type: PropTypes.oneOf(['checkbox', 'radio']),
//   id: PropTypes.string,
//   name: PropTypes.string,
//   value: PropTypes.string,
//   checked: PropTypes.bool,
//   disabled: PropTypes.bool,
//   correct: PropTypes.bool,
//   incorrect: PropTypes.bool,
//   label: PropTypes.string,
// }

export type InputBoxProps = {
  type: 'checkbox' | 'radio',
  id: string,
  name: string,
  value: string,
  checked: boolean,
  disabled: boolean,
  correct: boolean,
  incorrect: boolean,
  label: string,
}

export function InputBox({ type, id, value, name, checked, disabled, correct, incorrect, label }: InputBoxProps) {
	const isCorrect = correct ? 'correct' : '';
	const isIncorrect = incorrect ? 'incorrect' : '';

  return (
    <>
      <form className="">
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
          { label }
        </label>

      </form>
    </>
  )
}
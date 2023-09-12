import PropTypes from 'prop-types';
import imageSrc from '../assets/scss/images/zelda.jpeg'

MultipleChoiceQuestion.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
  image: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  correct: PropTypes.bool,
  incorrect: PropTypes.bool,
  label: PropTypes.string,
	grade: PropTypes.oneOf(['g35', 'g68', 'g912'])
}

export function MultipleChoiceQuestion({ type, image, id, value, checked, disabled, correct, incorrect, label, grade }) {
	const isCorrect = correct ? 'correct' : '';
	const isIncorrect = incorrect ? 'incorrect' : '';

  return (
    <div className={ grade }>
      <form className="mcq">
        <input 
          type={ type }
          id={ id }
          className={` ${isCorrect} ${isIncorrect}`}
          value={ value }
          defaultChecked={ checked }
          disabled={ disabled }
        />
        <label
          htmlFor={ id }
        >
          { image 
            ? <img src={ imageSrc } /> : label
          }
          
        </label>

      </form>
    </div>
  )
}
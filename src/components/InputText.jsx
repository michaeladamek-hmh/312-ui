import PropTypes from 'prop-types';

InputText.propTypes = {
  correct: PropTypes.bool,
  incorrect: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
};

export function InputText({ correct, incorrect, value, disabled, grade }) {
  const isCorrect = correct ? 'correct' : '';
  const isIncorrect = incorrect ? 'incorrect' : '';

  return (
    <div className={grade}>
      <input
        type="text"
        className={` ${isCorrect} ${isIncorrect}`}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

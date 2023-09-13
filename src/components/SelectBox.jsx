import PropTypes from 'prop-types';

SelectBox.propTypes = {
  correct: PropTypes.bool,
  incorrect: PropTypes.bool,
  disabled: PropTypes.bool,
	grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
}

export function SelectBox({ correct, incorrect, disabled, grade }) {
	const isCorrect = correct ? 'correct' : '';
	const isIncorrect = incorrect ? 'incorrect' : '';

	return (
    <div className={ grade }>
      <select className={` ${isCorrect} ${isIncorrect} `} disabled={ disabled }>
        <option>Tears of the Kingdom</option>
        <option>Breath of the Wild</option>
        <option>Skyward Sword</option>
        <option>Twilight Princess</option>
        <option>The Wind Waker</option>
        <option>Majora&apos;s Mask</option>
        <option>Ocarina of Time</option>
      </select>
    </div>
	);
}
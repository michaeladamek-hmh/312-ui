import PropTypes from 'prop-types';

Button.propTypes = {
  label: PropTypes.string,
	primary: PropTypes.bool,
	focused: PropTypes.bool,
	disabled: PropTypes.bool,
	grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
}

export function Button({ grade, label, primary, focused, disabled }) {
	const isPrimary = primary ? 'primary' : 'secondary';
	const isFocused = focused ? 'focus-visiable' : '';

	return (
		<div className={grade}>
			<button type="button" className={` ${isPrimary} ${isFocused} `} disabled={disabled} >
				{ label }
			</button>
		</div>
	);
}
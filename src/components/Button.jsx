import PropTypes from 'prop-types';

Button.propTypes = {
	grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
  label: PropTypes.string,
	primary: PropTypes.bool,
	disabled: PropTypes.bool
}

export function Button({ grade, label, primary, disabled }) {
	const isPrimary = primary ? 'primary' : 'secondary';

	return (
		<div className={grade}>
			<button type="button" className={` ${isPrimary} `} disabled={disabled} >
				{ label }
			</button>
		</div>
	);
}
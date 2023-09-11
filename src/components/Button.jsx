import PropTypes from 'prop-types';

Button.propTypes = {
  label: PropTypes.string,
	primary: PropTypes.bool,
	disabled: PropTypes.bool,
	grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
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
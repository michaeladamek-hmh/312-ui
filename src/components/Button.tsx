// import PropTypes from 'prop-types';

// Button.propTypes = {
//   label: PropTypes.string,
// 	primary: PropTypes.bool,
// 	disabled: PropTypes.bool,
// }

export type ButtonProps = {
	label: string;
	primary: boolean;
	disabled: boolean;
}

export function Button({label, primary, disabled}: ButtonProps){
	const isPrimary = primary ? 'primary' : 'secondary';

	return (
		<button type="button" className={` ${isPrimary} `} disabled={disabled} >
			{ label }
		</button>
	);
}
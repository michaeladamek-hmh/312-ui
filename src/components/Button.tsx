// import PropTypes from 'prop-types';

// Button.propTypes = {
//   label: PropTypes.string,
// 	primary: PropTypes.bool,
// 	disabled: PropTypes.bool,
// }

export type ButtonProps = {
<<<<<<< HEAD
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
=======
  children: React.ReactNode;
  primary: boolean;
  disabled: boolean;
};

export function Button({ children, primary, disabled }: ButtonProps) {
  const isPrimary = primary ? 'connect__button-primary' : 'connect__button-secondary';

  return (
    <button type="button" className={`connect__button ${isPrimary} `} disabled={disabled}>
      {children}
    </button>
  );
}
>>>>>>> prefixed

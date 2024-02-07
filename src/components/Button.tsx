export type ButtonProps = {
	children: React.ReactElement,
	primary: boolean;
	disabled: boolean;
}

export function Button({children, primary, disabled}: ButtonProps){
	const isPrimary = primary ? 'primary' : 'secondary';

	return (
		<button type="button" className={` ${isPrimary} `} disabled={disabled} >
			{ children }
		</button>
	);
}
export type ButtonProps = {
  children: React.ReactElement;
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

export default function RoundedButton({
  className = 'rounded-button',
  children,
  disabled = false,
  ...restProps
}) {
  return (
    <button
      className={`${className} ${disabled ? 'opacity-60' : ''}`}
      {...restProps}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

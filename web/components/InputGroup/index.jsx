export default function InputGroup({
  className = '',
  errorClasses = '',
  label = '',
  placeholder = '',
  type = 'text',
  Tag = 'input',
  register,
  error = '',
  onBlur,
}) {
  return (
    <label
      className="relative flex w-full flex-col gap-1 font-nunito 
      text-base font-medium leading-160 text-black"
    >
      {label}

      <Tag
        className={
          error?.length ? `form-input form-input--error ${className}` : `form-input ${className}`
        }
        type={type}
        {...register()}
        placeholder={placeholder}
        onBlur={onBlur}
      />

      {error?.length > 0 && (
        <p className={`body-s absolute bottom-[-25px] text-[14px] text-error ${errorClasses}`}>
          {error}
        </p>
      )}
    </label>
  )
}

export default function FacebookIcon({ className, color = 'white', ...restProps }) {
  return (
    <svg
      className={className}
      {...restProps}
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3111 3.95683C10.6878 3.83216 9.84593 3.73903 9.31646 3.73903C7.8828 3.73903 7.78967 4.36236 7.78967 5.35969V7.13509H11.3735L11.0611 10.8128H7.78967V21.999H3.30242V10.8128H0.996094V7.13509H3.30242V4.86029C3.30242 1.74436 4.76689 -0.000976562 8.44381 -0.000976562C9.72127 -0.000976562 10.6563 0.186024 11.8714 0.435358L11.3111 3.95683Z"
        fill={color}
      />
    </svg>
  )
}

export default function LinkedInIcon({ className = '', color = 'white', ...restProps }) {
  return (
    <svg
      className={className}
      {...restProps}
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.77865 2.28389C4.77865 3.52898 3.83062 4.5366 2.34806 4.5366C0.923261 4.5366 -0.024771 3.52898 0.0045685 2.28389C-0.024771 0.978283 0.923239 0 2.37646 0C3.8306 0 4.75023 0.978283 4.77865 2.28389ZM0.123765 20.8191V6.31622H4.63103V20.8181H0.123765V20.8191Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2442 10.9453C8.2442 9.13639 8.1846 7.59424 8.125 6.31889H12.04L12.2481 8.30572H12.337C12.9303 7.38612 14.4128 5.99341 16.815 5.99341C19.7801 5.99341 22.0044 7.9509 22.0044 12.2198V20.8217H17.4971V12.7846C17.4971 10.9151 16.8452 9.64066 15.2141 9.64066C13.9681 9.64066 13.2273 10.5007 12.9312 11.3304C12.812 11.6275 12.7533 12.0419 12.7533 12.4582V20.8217H8.24601V10.9453H8.2442Z"
        fill={color}
      />
    </svg>
  )
}

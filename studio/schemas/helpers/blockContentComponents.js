import React from 'react'

export const FcBookmark = props => (
  <svg
    width={16}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
    />
  </svg>
)

export const TableOfContent = props => {
  return (
    <span>
      <span style={{ width: 'fit-content' }}>{props.children}</span>
      <FcBookmark style={{ margin: '11px 0px 0px 10px' }} />
    </span>
  )
}

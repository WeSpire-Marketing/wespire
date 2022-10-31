import Link from 'next/link'

export default function FooterLink({
  internal = true,
  href = '#',
  className = '',
  children = 'Footer Link',
}) {
  return internal ? (
    <Link href={href} passHref>
      <a className={`footer__link text-secondary ${className}`}>{children}</a>
    </Link>
  ) : (
    <a
      className={`footer__link text-secondary ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

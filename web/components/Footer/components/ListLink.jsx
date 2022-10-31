import Link from 'next/link'

export default function ListLink({ href = '#', internal = false, children }) {
  return (
    <li className="footer__item">
      {internal ? (
        <Link href={href} passHref>
          <a className="footer__link text-[14px] text-secondary sm:text-[16px]">{children}</a>
        </Link>
      ) : (
        <a
          className="footer__link text-[14px] text-secondary sm:text-[16px]"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </li>
  )
}

import Link from 'next/link'

export default function HeaderLink({ internal = false, url, text }) {
  return internal ? (
    <Link href={url} passHref>
      <a className="primary-btn mx-auto block w-full max-w-[345px] text-center">{text}</a>
    </Link>
  ) : (
    <a
      className="primary-btn mx-auto block w-full max-w-[345px] text-center"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

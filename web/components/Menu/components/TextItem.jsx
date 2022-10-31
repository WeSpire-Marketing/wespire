import Link from 'next/link'

export default function TextItem({ internal = false, title, text, url }) {
  return (
    <div className="menu-item items-start gap-4">
      {internal ? (
        <Link href={url} passHref>
          <a
            className="menu-item__text__title mb-2 font-poppins
            text-[16px] font-medium leading-[100%] text-black"
          >
            {title}
          </a>
        </Link>
      ) : (
        <a
          className="menu-item__text__title mb-2 font-poppins
          text-[16px] font-medium leading-[100%] text-black"
          href={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {title}
        </a>
      )}

      <p className="menu-item__text__subtitle body-s text-[14px] text-secondary">{text}</p>
    </div>
  )
}

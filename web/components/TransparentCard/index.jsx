import Link from 'next/link'

import Img from '../Img'

export default function TransparentCard({
  title,
  text,
  imageData: {image, alt},
  link: {internal = false, text: linkText = '', url = '/'},
}) {
  return (
    <div className="card mx-auto max-w-[calc(100%-2rem)] lg:mx-0 screen:max-w-none">
      <Img
        className="card__preview relative mb-6 max-h-[405px]
        w-full overflow-hidden rounded-[16px]"
        value={{...image, alt}}
      />

      <div className="card__content pb-[2px]">
        <h3 className="card__content__title heading-3 mb-4">{title}</h3>

        <p className="card__content__text body-m mb-6 text-secondary">{text}</p>

        {internal ? (
          <Link href={url} passHref>
            <a className="card__content__link stroke-btn">{linkText}</a>
          </Link>
        ) : (
          <a
            className="card__content__link stroke-btn"
            rel="noreferrer noopener"
            target="_blank"
            href={url}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  )
}

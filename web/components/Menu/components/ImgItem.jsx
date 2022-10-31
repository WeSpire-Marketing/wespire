import Link from 'next/link'

import Img from '../../Img'

export default function ImgItem({image, title, text}) {
  return (
    <div className="menu-item flex items-start gap-4">
      <div
        className="menu-item__icon relative h-[64px] w-[64px] shrink-0
        overflow-hidden rounded-[16px]"
      >
        <Img value={image} />
      </div>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url} passHref>
            <a className="menu-item__text__title subtitle-m mb-2 text-[16px]">{title.text}</a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title subtitle-m mb-2 text-[16px]"
            href={title.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title.text}
          </a>
        )}

        <p
          className="menu-item__text__subtitle text-[14px] leading-[155%]
          text-secondary"
        >
          {text}
        </p>
      </div>
    </div>
  )
}

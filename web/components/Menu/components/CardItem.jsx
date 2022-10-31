import Link from 'next/link'

import Img from '../../Img'

export default function CardItem({image, text, title}) {
  return (
    <div className="menu-item flex flex-col items-center gap-[24px]">
      <div
        className="menu-item__icon relative h-[176px] w-[100%] shrink-0
        overflow-hidden rounded-[16px]"
      >
        <Img value={image} />
      </div>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url}>
            <a
              className="menu-item__text__title mb-2 font-poppins
              text-[16px] font-medium leading-[140%] text-black"
            >
              {title.text}
            </a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title mb-2 font-poppins
            text-[16px] font-medium leading-[140%] text-black"
            href={title.url}
            target="_blank"
            rel="noopener noreferrer"
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

import Link from 'next/link'

import Img from '../../Img'

export default function ImgItemHoriz({image, title, text}) {
  return (
    <div className="menu-item flex flex-col items-start gap-6 lg:gap-4">
      <div
        className="menu-item__icon relative h-[106px] w-[100%] shrink-0
        overflow-hidden rounded-[16px]"
      >
        <Img value={image} />
      </div>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url} passHref>
            <a
              className="menu-item__text__title mb-2 font-poppins
              text-[16px] font-medium leading-[100%] text-black"
            >
              {title.text}
            </a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title mb-2 font-poppins
            text-[16px] font-medium leading-[100%] text-black"
            href={title.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title.text}
          </a>
        )}

        <p className="menu-item__text__subtitle text-[14px] leading-[155%] text-secondary">
          {text}
        </p>
      </div>
    </div>
  )
}

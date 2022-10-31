import Link from 'next/link'

import Img from '../../Img'

export default function CardItemWithTags({image, text, title, tags}) {
  return (
    <div className="menu-item max-w-[266px]">
      <div
        className="menu-item__icon relative mb-2 h-[176px] w-[100%]
        shrink-0 overflow-hidden rounded-[16px]"
      >
        <Img value={image} />
      </div>

      <ul className="menu-item__tags mb-4 inline-flex items-start gap-4">
        {tags?.length > 0 &&
          tags.map((tag) => {
            return (
              <li key={tag._key}>
                <span
                  className="tag inline-block text-[14px]"
                  style={{border: `1px solid ${tag.color}`, color: tag.color}}
                >
                  {tag.value}
                </span>
              </li>
            )
          })}
      </ul>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url}>
            <a
              className="menu-item__text__title mb-1 font-poppins
              text-[16px] font-medium leading-[140%] text-black"
            >
              {title.text}
            </a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title mb-1 font-poppins
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

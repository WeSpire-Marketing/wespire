import Image from 'next/image'
import {useRouter} from 'next/router'

import {urlForImage} from '../../client'
import {formatTimestamp} from '../../utils'

export default function BlogCardHoriz({
  title,
  imageData,
  categories,
  excerpt,
  publishedAt,
  reversed = false,
  slug,
}) {
  const router = useRouter()

  return (
    <div
      className={`${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row '
      } blogcardhoriz flex cursor-pointer flex-col items-center gap-4 overflow-hidden
      rounded-[16px] border-[1px] border-[rgba(202,205,212,0.8)] bg-white p-6
      pb-[40px]
      lg:gap-[40px] lg:p-[40px]`}
      onClick={() => router.push(`/blog/${slug.current}`)}
    >
      <div
        className="blogcardhoriz__image relative aspect-[4/3]
        w-full flex-shrink-0 overflow-hidden rounded-[16px] lg:w-[50%]"
      >
        <Image
          src={urlForImage(imageData.image).url()}
          alt={imageData.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div
        className="blogcardhoriz__info w-full flex-col justify-between px-0
        lg:w-[50%] lg:px-[24px]"
      >
        <div className="mb-6 flex items-center justify-between lg:mb-[40px]">
          <ul className="blogcardhoriz__tags">
            {(categories ?? []).slice(0, 1).map(({title, color}, idx) => (
              <li
                key={idx}
                className="tag w-min lg:w-fit"
                style={{color, border: `1px solid ${color}`}}
              >
                {title}
              </li>
            ))}
          </ul>

          <div className="blogcardhoriz__pub body-s text-grey1 lg:hidden">
            {formatTimestamp(publishedAt)}
          </div>
        </div>

        <div className="blogcardhoriz__text">
          <h3 className="blogcardhoriz__title heading-3 mb-4">{title}</h3>

          <p className="blogcardhoriz__excerpt body-m line-clamp-2 lg:line-clamp-3 lg:mb-[80px]">
            {excerpt}
          </p>
        </div>

        <div className="blogcardhoriz__pub body-s hidden text-grey1 lg:block">
          {formatTimestamp(publishedAt)}
        </div>
      </div>
    </div>
  )
}

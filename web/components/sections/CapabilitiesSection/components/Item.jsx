import Image from 'next/image'

import {urlForImage} from '../../../../client'

export default function Item({icon, title, text}) {
  return (
    <li className="capabilities__list-item flex-1">
      <div className="capabilities__list-item__icon mx-auto mb-[24px] h-[80px] w-[80px]">
        <Image
          width={80}
          height={80}
          src={urlForImage(icon).url()}
          layout="responsive"
          objectFit="cover"
          alt="icon"
        />
      </div>

      <h3 className="capabilities__list-item__title heading-4 mb-[16px] text-center">{title}</h3>

      <p
        className="capabilities__list-item__text body-s mx-auto w-[100%] max-w-[320px] text-center
        text-secondary"
      >
        {text}
      </p>
    </li>
  )
}

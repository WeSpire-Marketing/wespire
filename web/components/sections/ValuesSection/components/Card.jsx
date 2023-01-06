import Image from 'next/image'

import {urlForImage} from '../../../../client'

const Card = ({className = '', title, text, image}) => {
  return (
    <div
      className={className + ` valection__card flex flex-col
      rounded-[16px] bg-white py-6 px-[10px] text-center
      lg:px-[36px] lg:pt-[24px] lg:pb-[32px]`}
    >
      <div className="valection__card__image mb-[32px] flex justify-center">
        <Image
          width={64}
          height={64}
          src={urlForImage(image).width(64).height(64).fit('crop').url()}
          layout="fixed"
          objectFit="cover"
          alt="card image"
        />
      </div>

      <h3 className="valection__card__title heading-4 mb-4">{title}</h3>

      <p className="valection__card__text text-base font-normal leading-160 text-secondary">
        {text}
      </p>
    </div>
  )
}

export default Card

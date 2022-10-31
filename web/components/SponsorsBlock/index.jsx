import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import {urlForImage} from '../../client'

export default function SponsorsBlock({sponsors}) {
  return (
    <Marquee className="sponsors__list" gradient={false}>
      {sponsors.map(({_key, name, image}, idx) => {
        return (
          <div
            className="sponsors__item relative mx-[20px] h-[50px] w-[200px] lg:mx-[36px]"
            key={_key}
          >
            <Image
              src={urlForImage(image).fit('crop').url()}
              alt={name}
              layout="responsive"
              width={200}
              height={50}
              objectFit="contain"
              priority
            />
          </div>
        )
      })}
    </Marquee>
  )
}

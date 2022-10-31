import Image from 'next/image'
import {useNextSanityImage} from 'next-sanity-image'

import client from '../../client'

export default function Img({className = '', value, ...props}) {
  const imageProps = useNextSanityImage(client, value)

  return (
    <div className={className} {...props}>
      <Image {...imageProps} alt={value.alt} layout="responsive" objectFit="cover" />
    </div>
  )
}

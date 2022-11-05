import {PortableText} from '@portabletext/react'

import myPortableTextComponents from '../../utils/myPortableComponents'

export default function Content({title, text, date, content}) {
  return (
    <>
      <h1 className="heading-2 mb-4 px-2 lg:mb-6 lg:px-0">{title}</h1>

      <p
        className="font-lg mt-0 mb-6 px-2 font-poppins
        font-semibold leading-[150%] text-grey1 lg:mb-8 lg:px-0"
      >
        {date}
      </p>

      <p className="px-2 lg:px-0">{text}</p>

      <PortableText value={content} components={myPortableTextComponents} />
    </>
  )
}

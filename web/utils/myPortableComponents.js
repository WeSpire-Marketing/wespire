import slugify from 'slugify'
import {toPlainText} from '@portabletext/react'

import Img from '../components/Img'
import Quote from '../components/Quote'
import Table from '../components/Table'
import Video from '../components/Video'

const myPortableTextComponents = {
  block: {
    h1: ({children, value = ''}) => {
      const slug = slugify(toPlainText(value))
      return (
        <h1 className="px-2 lg:mb-6 lg:px-0" id={slug}>
          <span className="heading-1 text-black">{children}</span>
        </h1>
      )
    },
    h2: ({children, value = ''}) => {
      const slug = slugify(toPlainText(value))
      return (
        <h2 className="px-2 lg:mb-6 lg:px-0" id={slug}>
          <span className="heading-2 text-black">{children}</span>
        </h2>
      )
    },
    h3: ({children, value = ''}) => {
      const slug = slugify(toPlainText(value))
      return (
        <h3 className="px-2 lg:mb-6 lg:px-0" id={slug}>
          <span className="heading-3 inline-block text-black">{children}</span>
        </h3>
      )
    },
    h4: ({children, value = ''}) => {
      const slug = slugify(toPlainText(value))
      return (
        <h4 className="px-2 lg:mb-6 lg:px-0" id={slug}>
          <span className="heading-4 text-black">{children}</span>
        </h4>
      )
    },
    h5: ({children, value = ''}) => {
      const slug = slugify(toPlainText(value))
      return (
        <h4 className="px-2 lg:mb-6 lg:px-0" id={slug}>
          <span className="text-base text-black">{children}</span>
        </h4>
      )
    },
    h6: ({children, value = ''}) => {
      const slug = slugify(toPlainText(value))
      return (
        <h4 className="px-2 lg:mb-6 lg:px-0" id={slug}>
          <span className="text-base text-black">{children}</span>
        </h4>
      )
    },
    // p
    normal: ({children}) => <p className="body-m mb-4 px-2 lg:mb-8 lg:px-0">{children}</p>,
  },
  types: {
    table: Table,
    image: ({value}) => <Img className="relative my-[64px] w-full" value={value} />,
    quote: Quote,
    videoId: ({value}) => (
      <div
        className="relative mx-auto mb-[35px] w-full overflow-hidden rounded-[16px]
        lg:mb-[56px]"
        style={{filter: 'drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.2))'}}
      >
        <Video video={value} />
      </div>
    ),
  },
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = value?.blank ? '_blank' : undefined
      return (
        <a href={value.href} rel={rel} target={target}>
          {children}
        </a>
      )
    },
  },
}

export default myPortableTextComponents

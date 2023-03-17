import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import useScrollSpy from 'react-use-scrollspy'

import TwitterIcon from '../icons/TwitterIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import FacebookIcon from '../icons/FacebookIcon'
import Image from 'next/image'
import {urlForImage} from '../../client'
import {PortableText} from '@portabletext/react'
import {portableHyperlinkLight} from '../../utils/portableHyperlink'

export default function BlogSidebar({items = [], slug, showAuthorBio, author}) {
  const [elementRefs, setElementRefs] = useState([])
  const activeSection = useScrollSpy({
    sectionElementRefs: elementRefs, // Array of References to titles DOM elements
    offsetPx: -80,
  })

  useEffect(() => {
    let refs = []
    if (typeof document !== 'undefined') {
      refs = items.map((item) => {
        const itemId = slugify(item?.children[0]?.text ?? '')
        const itemNode = document.getElementById(itemId)
        const ref = React.createRef()
        ref.current = itemNode
        return ref
      })
      setElementRefs(refs)
    }
  }, [items])

  const shareFacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${slug}`
  )}`
  const shareTwitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${slug}`
  )}`
  const shareLinkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${slug}`
  )}`

  return (
    <aside className="sidebar text-left">
      {showAuthorBio && (
        <div className="sidebar__inner px-2 mb-8 lg:mb-12 lg:ml-auto lg:max-w-[288px] lg:px-0 flex flex-col gap-4">
          <div className="article__author inline-flex items-center gap-4 px-0 ">
            <div
              className="article__author-image relative h-[56px] w-[56px] shrink-0 rounded-full
                      overflow-hidden
                      lg:h-[64px] lg:w-[64px]"
            >
              <Image
                src={urlForImage(author.avatar).width(64).height(64).url()}
                alt={author.avatar.alt}
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="article__author-info">
              <p
                className="article__author-info__name mb-2 text-base font-normal leading-160 
                        lg:mb-0"
              >
                <strong>{author.name}</strong>
              </p>

              <p className="article__author-info__published font-normal leading-160">
                {author.jobTitle ?? 'Author'}
              </p>
            </div>
          </div>

          <div className="content min-w-[100%]">
            <PortableText
              value={author.authorBio}
              onMissingComponent={false}
              components={portableHyperlinkLight}
            />
          </div>
        </div>
      )}

      <div className="sidebar__inner sticky top-[100px] px-2 lg:ml-auto lg:max-w-[288px] lg:px-0">
        <p
          className="mb-6 font-poppins text-[18px] font-semibold
          leading-[150%] text-secondary lg:mb-[32px]"
        >
          In this post:
        </p>

        <ul
          className="border-[rgba(rgb(202_205_212_0.8))] mb-8 flex flex-col gap-6
          border-b-[1px] pb-8 lg:mb-[40px] lg:pb-[40px]"
        >
          {items?.length > 0 &&
            items.map((item, idx) => {
              const customTitle = item?.markDefs[0]?.title
              const defaultTitle = item?.children[0]?.text
              let slug = slugify(defaultTitle)

              if (item?.children?.length > 1) {
                if (item?.children[0]?.text !== '\n') {
                  slug = slugify(item?.children[0]?.text + item?.children[1]?.text)
                } else {
                  if (item?.children?.length > 3) {
                    slug = slugify(
                      item?.children[1]?.text + item?.children[2]?.text + item?.children[3]?.text
                    )
                  } else {
                    slug = slugify(item?.children[1]?.text + item?.children[2]?.text)
                  }
                }
              }

              return (
                <li key={item._key}>
                  <a
                    className={`
                    ${
                      activeSection === idx ? `text-smart` : `text-[#9E9E9E]`
                    } block font-poppins text-[18px] font-medium
                    leading-[100%] tracking-[-0.01em]`}
                    href={'#' + slug}
                  >
                    {customTitle ?? (defaultTitle || 'The title is not specified')}
                  </a>
                </li>
              )
            })}
        </ul>

        <p className="mb-[20px] font-poppins text-[18px] font-semibold leading-[150%] text-black">
          Share
        </p>

        <ul className="flex gap-[20px]">
          <li>
            <Link href={shareTwitterUrl} passHref>
              <a
                className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full
                bg-smart hover:bg-[#1866C2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-[24px]" />
              </a>
            </Link>
          </li>

          <li>
            <Link href={shareLinkedInUrl} passHref>
              <a
                className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full
                bg-smart hover:bg-[#1866C2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="w-[23px] translate-x-[2px] translate-y-[-1px]" />
              </a>
            </Link>
          </li>

          <li>
            <Link href={shareFacebookUrl} passHref>
              <a
                className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full
                bg-smart hover:bg-[#1866C2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="w-[24px]" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

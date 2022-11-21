import groq from 'groq'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import {PortableText} from '@portabletext/react'

import Img from '../../components/Img'
import PageMeta from '../../components/PageMeta'
import BackToBlog from '../../components/BackToBlog'
import BlogSidebar from '../../components/BlogSidebar'
import RelatedBlock from '../../components/RelatedBlock'
import CtaSection from '../../components/sections/CTASection'
import MainLayout from '../../components/layouts/MainLayout'

import {GetForm} from '../../utils/forms'
import {formatTimestamp} from '../../utils'
import {slugParamToPath} from '../../utils/urls'
import myPortableTextComponents from '../../utils/myPortableComponents'
import useCustomScrollBehavior from '../../utils/hooks/useCustomScrollBehavior'

import client, {urlForImage} from '../../client'

export async function getServerSideProps({params}) {
  const slug = slugParamToPath(params?.slug)
  const data = await client.fetch(
    groq`
    *[_type == 'article' && slug.current == $slug][0]{
      ...,
      "author": author->{ name, avatar },
      "related": related[]->{
        imageData,
        "categories": categories[] -> {
          title,
          color
        },
        title,
        publishedAt,
        excerpt,
        slug,
      },
      "readingTime": round(length(pt::text(content)) / 5 / 180 ),
      "categories": categories[]->{ title },
      "mainNavigation": *[_id == "global-config"][0].mainNavigation,
      "footerNavigation": *[_id == "global-config"][0].footerNavigation,
    }`,
    {slug}
  )

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}

export default function Index({
  data: {
    pageMeta,
    mainNavigation,
    footerNavigation,
    categories,
    imageData,
    title,
    author,
    publishedAt,
    content,
    readingTime,
    form,
    related,
    ctaSection,
    slug,
    excerpt,
  },
}) {
  useCustomScrollBehavior()
  const contentRef = useRef(null)
  const [navItems, setNavItems] = useState([])

  // set array of all H2/H3 nodes from article content
  useEffect(() => {
    if (contentRef.current) {
      const nodeList = contentRef.current.childNodes
      const titleNodes = Array.from(nodeList).filter(
        (node) => node.nodeName === 'H3' || node.nodeName === 'H2'
      )
      titleNodes.forEach((titleNode, idx) => titleNode.setAttribute('id', `title-${idx + 1}`))
      setNavItems(titleNodes)
    }
  }, [content])

  return (
    <div className="articlepage bg-gallery">
      <PageMeta meta={pageMeta} />
      <MainLayout config={{mainNavigation, footerNavigation}} template="articleTemplate">
        <article className="article bg-smart">
          <div className="container px-0 lg:px-8">
            <div className="inner pt-[160px] pb-[72px] lg:pt-[150px] lg:pb-[120px]">
              <div
                className="article__header flex flex-col items-center justify-between overflow-hidden
                lg:overflow-visible lg:flex-row lg:gap-12"
              >
                <div className="article__left w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[540px]">
                  <div className="overflow-hidden">
                    <div
                      className="article__tags w-full pb-3 mb-3 inline-flex items-center gap-4 px-4
                      overflow-x-auto
                      lg:overflow-x-visible lg:mb-4 lg:px-0"
                    >
                      {(categories ?? []).slice(0, 3).map((cat, idx) => (
                        <span className="tag shrink-0" key={idx}>
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h1
                    className="article__title heading-2 lg:heading-1 mb-4 px-4
                    text-white lg:mb-[154px] lg:px-0 lg:text-[46px]"
                  >
                    {title}
                  </h1>

                  <p className="body-m mb-[40px] px-4 text-white lg:hidden">{excerpt}</p>

                  <div className="mb-[40px] px-2 max-w-[600px] mr-auto lg:hidden">
                    <Image
                      className="overflow-hidden rounded-[16px]"
                      width={600}
                      height={406}
                      src={urlForImage(imageData.image).width(600).height(406).url()}
                      alt={imageData.alt}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>

                  <div className="article__author inline-flex items-center gap-4 px-4 lg:px-0">
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
                        className="article__author-info__name mb-2 text-base font-normal leading-160 text-white
                        lg:mb-0"
                      >
                        Written by <strong>{author.name}</strong>
                      </p>

                      <p className="article__author-info__published font-normal leading-160 text-[#F9FBFF]">
                        Published {formatTimestamp(publishedAt)} ⸱ {readingTime} min read
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="article__right hidden w-full h-full max-w-[600px] overflow-hidden rounded-[16px]
                  relative aspect-[16/10.8]
                  lg:block lg:w-[50%]"
                  transition={{duration: 1, delay: 0.5}}
                  whileInView={{opacity: 1, y: 0}}
                  initial={{opacity: 0, y: -50}}
                  viewport={{once: true}}
                >
                  <Image
                    className="w-full h-full"
                    width={600}
                    height={406}
                    src={urlForImage(imageData.image).width(600).height(406).url()}
                    alt={imageData.alt}
                    layout="responsive"
                    objectFit="cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div
            className="article__content rounded-t-[30px] bg-gallery pt-[48px] pb-[100px]
            lg:rounded-t-[60px] lg:pt-[100px] lg:pb-[140px]"
          >
            <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
              <div
                className="inner mb-[40px] flex grid-cols-[2fr_1fr] flex-col-reverse gap-[80px]
                lg:mb-[64px] lg:grid lg:gap-4"
              >
                <div className="content prose min-w-[100%]" ref={contentRef}>
                  <PortableText value={content} components={myPortableTextComponents} />
                </div>

                <BlogSidebar items={navItems} slug={slug.current} />
              </div>

              <BackToBlog className="mb-[80px] lg:mb-[140px]" />

              {form.isForm && <GetForm className="mb-[130px]" {...form.form[0]} />}

              <RelatedBlock items={related} />
            </div>
          </div>
        </article>

        <CtaSection title={ctaSection.title} link={ctaSection.link} />
      </MainLayout>
    </div>
  )
}

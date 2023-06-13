import groq from 'groq'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import {PortableText} from '@portabletext/react'
import {useNextSanityImage} from 'next-sanity-image'

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

import localDataURL from '../../assets/images/blur-placeholder.jpg'
import HubspotForm from '../../components/forms/HubspotForm'
import {createSeoScript} from '../../utils/seo'
import GoogleFAQSection from '../../components/sections/GoogleFAQSection'

const constFormId = Object.freeze({
  'Saturday Spark': 'b54c00a6-2321-48a9-bd48-a5084fe37c35',
  'WeSpire Weekly': 'b54c00a6-2321-48a9-bd48-a5084fe37c35',
  'WeSpire: Live': '16c145eb-a95a-48ab-bb9e-364f6cd4b4bc',
  'WeSpire: Live!': '16c145eb-a95a-48ab-bb9e-364f6cd4b4bc',
  'Research and Reports': 'd192a987-f979-47b6-9f9a-9b4199345ff4',
  'WeSpire Insights': 'd192a987-f979-47b6-9f9a-9b4199345ff4',
})

export async function getServerSideProps({params}) {
  const slug = slugParamToPath(params?.slug)
  const data = await client.fetch(
    groq`
    *[_type == 'article' && slug.current == $slug][0]{
      ...,
      "author": author->{ name, avatar, jobTitle, authorBio },
      "showAuthorBio": showAuthorBio,
      "showSection": showSection,
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
      "content": content[]{
        ...,
        _type == 'file' => {
          ...,
          "downloadUrl": asset->url
        },
      },
      "readingTime": round(length(pt::text(content)) / 5 / 180 ),
      "categories": categories[]->{ title },
      "mainNavigation": *[_id == "global-config"][0].mainNavigation,
      "footerNavigation": *[_id == "global-config"][0].footerNavigation,
      "ctaButton": *[_id == "global-config"][0].ctaButton,
      "headings": content[length(style) == 2 && string::startsWith(style, "h")]
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
    ctaButton,
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
    showAuthorBio,
    excerpt,
    headings,
    listFAQ,
    showSection,
  },
}) {
  useCustomScrollBehavior()
  const [formattedDate, setFormattedDate] = useState(null)
  const imageProps = useNextSanityImage(client, imageData.image)

  useEffect(() => setFormattedDate(formatTimestamp(publishedAt)), [])

  useEffect(() => {
    if (localStorage) {
      localStorage.removeItem('hubspotData')
    }

    return () => {
      localStorage.removeItem('hubspotData')
    }
  }, [])
  return (
    <div className="articlepage bg-gallery">
      <PageMeta meta={pageMeta} />
      {Boolean(listFAQ?.showFAQ) && createSeoScript(listFAQ.listFAQ)}
      <MainLayout config={{mainNavigation, footerNavigation, ctaButton}} template="articleTemplate">
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
                    text-white lg:px-0 lg:text-[46px]"
                  >
                    {title}
                  </h1>

                  <p className="body-m mb-[40px] px-4 text-white lg:hidden">{excerpt}</p>

                  <div className="mb-[40px] px-2 max-w-[600px] mr-auto lg:hidden">
                    <Image
                      className="overflow-hidden rounded-[16px]"
                      blurDataURL={imageProps?.blurDataURL ?? localDataURL.blurDataURL}
                      src={urlForImage(imageData.image).width(600).height(406).url()}
                      alt={imageData.alt}
                      layout="responsive"
                      placeholder="blur"
                      objectFit="cover"
                      quality={100}
                      height={406}
                      width={600}
                    />
                  </div>

                  {constFormId[categories?.[0]?.title] && (
                    <div className="mb-[32px] mt-[32px] lg:mb-[32px] lg:mt-[88px] px-4 lg:px-0">
                      <HubspotForm page="article" formId={constFormId[categories?.[0]?.title]} />
                    </div>
                  )}

                  <div
                    className={`article__author inline-flex items-center gap-4 px-4 lg:px-0 ${
                      !constFormId[categories?.[0]?.title] ? 'mt-[32px] lg:mt-[88px]' : ''
                    }`}
                  >
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
                        Published {formattedDate} ⸱ {readingTime} min read
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
                    src={urlForImage(imageData.image).width(600).height(406).url()}
                    blurDataURL={imageProps?.blurDataURL ?? localDataURL.blurDataURL}
                    alt={imageData.alt}
                    layout="responsive"
                    placeholder="blur"
                    objectFit="cover"
                    quality={100}
                    height={406}
                    width={600}
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
                <div className="content prose min-w-[100%]">
                  <PortableText
                    value={content}
                    onMissingComponent={false}
                    components={myPortableTextComponents}
                  />
                </div>

                <BlogSidebar
                  items={headings}
                  slug={slug.current}
                  showAuthorBio={showAuthorBio}
                  author={author}
                />
              </div>

              <BackToBlog className="mb-[80px] lg:mb-[140px]" />

              {form.isForm && <GetForm className="mb-[130px]" {...form.form[0]} />}

              {showSection && <RelatedBlock items={related} />}
            </div>
          </div>
        </article>
        {Boolean(listFAQ?.showFAQ) && <GoogleFAQSection {...listFAQ} />}
        <CtaSection title={ctaSection.title} link={ctaSection.link} />
      </MainLayout>
    </div>
  )
}

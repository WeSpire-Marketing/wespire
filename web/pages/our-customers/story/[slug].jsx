import groq from 'groq'
import {motion} from 'framer-motion'
import {PortableText} from '@portabletext/react'

import PageMeta from '../../../components/PageMeta'
import Icon from '../../../components/icons/AnimatedBigArrow'
import MainLayout from '../../../components/layouts/MainLayout'
import CTASection from '../../../components/sections/CTASection'
import SliderSection from '../../../components/sections/SliderSection'

import client from '../../../client'
import {slugParamToPath} from '../../../utils/urls'
import myPortableTextComponents from '../../../utils/myPortableComponents'
import useCustomScrollBehavior from '../../../utils/hooks/useCustomScrollBehavior'
import {useEffect} from 'react'

export async function getServerSideProps({params}) {
  const slug = slugParamToPath(params?.slug)
  const data = await client.fetch(
    groq`
    *[_type == 'stories' && storyCard.slug.current == $slug][0]{
      ...,
      "storyContent": storyContent{
        ...,
        "content": content[]{
          ...,
          _type == 'file' => {
            ...,
            "downloadUrl": asset->url
          },
        },
      },
      "mainNavigation": *[_id == "global-config"][0].mainNavigation,
      "footerNavigation": *[_id == "global-config"][0].footerNavigation,
      "ctaButton": *[_id == "global-config"][0].ctaButton,
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
    storyContent,
    sliderSection,
    ctaSection,
  },
}) {
  useCustomScrollBehavior()

  useEffect(() => {
    if (localStorage) {
      localStorage.removeItem('hubspotData')
    }

    return () => {
      localStorage.removeItem('hubspotData')
    }
  }, [])

  return (
    <div className="customerspage overflow-hidden bg-gallery">
      <PageMeta meta={pageMeta} />
      <MainLayout config={{mainNavigation, footerNavigation, ctaButton}}>
        <section>
          <div className="container px-2 lg:px-8">
            <div className="inner pt-[175px] pb-[100px] lg:pb-[140px]">
              <motion.h1
                className="title heading-2 relative mx-auto max-w-[385px]
                mb-[56px] w-full text-center text-[#000]
                sm:max-w-[446px]
                md:max-w-[635px]
                lg:max-w-[775px] lg:mb-[100px]"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
              >
                {storyContent.title}
                <Icon
                  className="absolute bottom-[-35px] right-[-3px] h-auto max-w-[50px]
                  md:max-w-[60px] md:right-[-30px]
                  lg:bottom-[-130px] lg:right-[-155px] lg:max-w-none"
                />
              </motion.h1>

              <div className="content prose mx-auto">
                <PortableText value={storyContent.content} components={myPortableTextComponents} />
              </div>
            </div>
          </div>
        </section>
        <SliderSection {...sliderSection} />
        <CTASection {...ctaSection} />
      </MainLayout>
    </div>
  )
}

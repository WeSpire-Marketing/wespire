import groq from 'groq'
import React from 'react'
import {NextSeo} from 'next-seo'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'

import Layout from '../components/layouts/MainLayout'
import RenderSections from '../components/RenderSections'

import client from '../client'
import {linkTags, metaTags} from '../utils/seo'
import {getSlugVariations, slugParamToPath} from '../utils/urls'

const pageFragment = groq`
...,
"config": *[_id == "global-config"][0] {
  ...,
},
content {
  ...,
  sections[] {
    ...,
    _type == 'homeTemplate' => {
      ...,
      "sections": sections{
        ...,
        "cardsSection": cardsSection{
          ...,
          "blogs": blogs[] -> {
            imageData,
            "categories": categories[] -> {
              title,
              color,
            },
            title,
            publishedAt,
            excerpt,
            slug,
          }
        },
      },
    },
    _type == 'wespireLiveTemplate' => {
      ...,
      "sections": sections{
        ...,
        "sessionSection": sessionSection{
          ...,
          "cards": cards[] -> {
            imageData,
            "categories": categories[] -> {
              title,
              color,
            },
            title,
            publishedAt,
            excerpt,
            slug,
          }
        },
        "mostPopularSection": mostPopularSection{
          ...,
          "blogs": blogs[] -> {
            imageData,
            "categories": categories[] -> {
              title,
              color,
            },
            title,
            publishedAt,
            excerpt,
            slug,
          }
        },
        "categoriesWithBlogsSection": categoriesWithBlogsSection{
          ...,
          "categories": *[_type == 'category']{
            title,
          },
          "blogs": blogs[] -> {
            imageData,
            "categories": categories[] -> {
              title,
              color,
            },
            title,
            publishedAt,
            excerpt,
            slug,
          }
        }
      }
    },
    _type == 'cardsSection' => {
      ...,
      "blogs": blogs[] -> {
        imageData,
        "categories": categories[] -> {
          title,
          color,
        },
        title,
        publishedAt,
        excerpt,
        slug,
      }
    },
    _type == 'blogTemplate' => {
      ...,
      "blogs": blogs[] -> {
        imageData,
        "categories": categories[] -> {
          title,
          color,
        },
        title,
        publishedAt,
        excerpt,
        slug,
      },
      "categories": *[_type == "category"] {
        ...,
      }
    },
    _type == 'newsRoomTemplate' => {
      ...,
      "sections": sections {
        ...,
        "articlesPressSection": articlesPressSection{
          ...,
          "blogs": blogs[] -> {
            imageData,
            "categories": categories[] -> {
              title,
              color,
            },
            title,
            publishedAt,
            excerpt,
            slug,
          },
        }
      }
    },
    _type == 'customersTemplate' => {
      ...,
      "sections": sections {
        ...,
        "customerStoriesSection": customerStoriesSection{
          ...,
          "stories": stories[]->{
            storyCard,
          }
        }
      }
    },
    _type == 'resourcesTemplate' => {
      ...,
      "blogs": blogs[] -> {
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
      "categories": *[_type == 'category']{
        title,
      },
      "sessionSection": sessionSection{
        ...,
        "cards": cards[] -> {
          title,
          publishedAt,
          excerpt,
          slug,
          imageData,
          "categories": categories[] -> {
            title,
            color
          },
        }
      },
    },
  },
}
`

/**
 * Fetches data for our pages.
 *
 * The [[...slug]] name for this file is intentional - it means Next will run this getServerSideProps
 * for every page requested - /, /about, /contact, etc..
 * From the received params.slug, we're able to query Sanity for the route coresponding to the currently requested path.
 */
export const getServerSideProps = async ({params}) => {
  const slug = slugParamToPath(params?.slug)

  let data

  // Frontpage - fetch the linked `frontpage` from the global configuration document.
  if (slug === '/') {
    data = await client
      .fetch(
        groq`
        *[_id == "global-config"][0]{
          frontpage -> {
            ${pageFragment}
          }
        }
      `
      )
      .then((res) => (res?.frontpage ? {...res.frontpage, slug} : undefined))
  } else {
    // Regular route
    data = await client
      .fetch(
        // Get the route document with one of the possible slugs for the given requested path
        groq`*[_type == "route" && slug.current in $possibleSlugs][0]{
          page-> {
            ${pageFragment}
          }
        }`,
        {possibleSlugs: getSlugVariations(slug)}
      )
      .then((res) => (res?.page ? {...res.page, slug} : undefined))
  }

  if (!data?._type === 'page' || !data) {
    return {
      notFound: true,
    }
  }

  return {
    props: data || {},
  }
}

const builder = imageUrlBuilder(client)

const LandingPage = (props) => {
  const {
    title = 'Missing title',
    description,
    disallowRobots,
    openGraphImage,
    content = [],
    config = {},
    slug,
  } = props

  const openGraphImages = openGraphImage
    ? [
        {
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        {
          // Facebook recommended size
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          // Square 1:1
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    : []

  return (
    <Layout
      config={config}
      hideDesktopNav={content?.sections[0]?.hideDesktopNav}
      hideMobileNav={content?.sections[0]?.hideMobileNav}
      template={content?.sections?.[0]?._type}
    >
      <NextSeo
        title={title}
        description={description}
        additionalLinkTags={linkTags}
        additionalMetaTags={metaTags}
        titleTemplate={`%s | ${config.title}`}
        canonical={config.url && `${config.url}/${slug}`}
        openGraph={{
          images: openGraphImages,
        }}
        noindex={disallowRobots}
      />
      {content?.sections && <RenderSections sections={content?.sections} />}
    </Layout>
  )
}

LandingPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  disallowRobots: PropTypes.bool,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
}

export default LandingPage

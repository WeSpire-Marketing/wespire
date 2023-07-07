import groq from 'groq'
import React, {Suspense, useEffect} from 'react'
import {NextSeo} from 'next-seo'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import {useRouter} from 'next/router'

import imageUrlBuilder from '@sanity/image-url'
const Layout = loadable(() => import('../components/layouts/MainLayout'))
const RenderSectionsDynamic = loadable(() => import('../components/RenderSections'))

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
    _type == 'privacyPolicyTemplate' => {
      ...,
      "headings": content[length(style) == 2 && string::startsWith(style, "h")]
    },
    _type == 'homeTemplate' => {
      ...,
      "sections": sections{
        ...,
        "blogCardsSection": blogCardsSection{
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
        }
      },
    },
        _type == 'personaTemplate' => {
      ...,
      "sections": sections{
        ...,
        "blogCardsSection": blogCardsSection{
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
        }
      },
    },
      _type == 'landingTemplate' => {
      ...,
      "sections": sections{
        ...,
        "blogCardsSection": blogCardsSection{
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
        }
      },
    },
      _type == 'landingTemplateCompetitor' => {
      ...,
      "sections": sections{
        ...,
        "blogCardsSection": blogCardsSection{
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
        }
      },
    },
      _type == 'landingTemplateSocialProof' => {
      ...,
      "sections": sections{
        ...,
        "blogCardsSection": blogCardsSection{
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
        }
      },
    },
      _type == 'landingVideoTemplate' => {
      ...,
      "sections": sections{
        ...,
        "blogCardsSection": blogCardsSection{
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
        }
      },
    },
      _type == 'productTemplate' => {
      ...,
      "sections": sections{
        ...,
        "blogCardsSection": blogCardsSection{
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
        }
      },
    },
      _type == 'productVideoTemplate' => {
      ...,
      "sections": sections{
        ...,
        "blogCardsSection": blogCardsSection{
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
        }
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
          "categories": categories[] -> {
            title,
            "slug": slug.current
          },
          "defaultCategory": defaultCategory -> {
            title,
            "slug": slug.current
          },
          "blogs": *[_type == "article" && (categories[]->slug.current match $filters)] | order(publishedAt desc) [length($query) == 0 || title match $query] [($page-1)*$perPage...($page-1)*$perPage+$perPage] {
            imageData,
            "categories": categories[] -> {
              title,
              color,
              "slug": slug.current
            },
            title,
            publishedAt,
            excerpt,
            slug,
          },
          "totalBlogs": count(*[_type == "article" && (categories[]->slug.current match $filters)] | order(publishedAt desc) [length($query) == 0 || title match $query]),
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
    _type == 'blogCardsSection' => {
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
      "blogs": *[_type == "article" && (categories[]->slug.current match $filters)] | order(publishedAt desc) [length($query) == 0 || title match $query] [($page-1)*$perPage...($page-1)*$perPage+$perPage] {
        imageData,
        "categories": categories[] -> {
          title,
          color,
          "slug": slug.current
        },
        title,
        publishedAt,
        excerpt,
        slug,
      },
      "totalBlogs": count(*[_type == "article" && (categories[]->slug.current match $filters)] | order(publishedAt desc) [length($query) == 0 || title match $query]),
      "categories": categories[] -> {
        title,
        "slug": slug.current
      },
      "defaultCategory": defaultCategory -> {
        title,
        "slug": slug.current,
      },
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
      "blogs": *[_type == "article" && ((count((categories[]->slug.current)[@ in $filters]) > 0) || (categories[]->slug.current match $filters))] | order(publishedAt desc) [length($query) == 0 || title match $query] [($page-1)*$perPage...($page-1)*$perPage+$perPage] {
        imageData,
        "categories": categories[] -> {
          title,
          color,
          "slug": slug.current
        },
        title,
        publishedAt,
        excerpt,
        slug,
      },
      "totalBlogs": count(*[_type == "article" && ((count((categories[]->slug.current)[@ in $filters]) > 0) || (categories[]->slug.current match $filters))] | order(publishedAt desc) [length($query) == 0 || title match $query]),
      "categories": categories[] -> {
        title,
        "slug": slug.current
      },
      "defaultCategory": defaultCategory -> {
        title,
        "slug": slug.current
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
export const getServerSideProps = async ({params, query}) => {
  const perPage = 9
  const slug = slugParamToPath(params?.slug)
  const page =
    decodeURIComponent(query.page) !== 'undefined' ? Number(decodeURIComponent(query.page)) : 1
  const filters =
    decodeURIComponent(query.filters) !== 'undefined' &&
    decodeURIComponent(query.filters).length > 0
      ? decodeURIComponent(query.filters).split(',')
      : []
  const searchingQuery =
    decodeURIComponent(query.query) !== 'undefined' ? decodeURIComponent(query.query) : ''

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
      `,
        {page, filters, perPage, query: searchingQuery}
      )
      .then((res) => (res?.frontpage ? {...res.frontpage, slug} : undefined))
    // Resource pages - fetch articles with dynamic query params
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
        {
          possibleSlugs: [slug, ...getSlugVariations(slug)],
          page,
          filters,
          perPage,
          query: searchingQuery,
        }
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
  const {query} = useRouter()

  useEffect(() => {
    if (query?.gclid) {
      localStorage.setItem('gclid', query?.gclid)
    }
  }, [])

  useEffect(() => {
    if (localStorage) {
      localStorage.removeItem('hubspotData')
    }

    return () => {
      localStorage.removeItem('hubspotData')
    }
  }, [])

  const openGraphImages = openGraphImage
    ? [
        // {
        //   url: builder.image(openGraphImage).width(1920).height(1080).url(),
        //   type: 'image/jpeg',
        //   width: 1920,
        //   height: 1080,
        //   alt: title,
        // },
        // {
        //   url: builder.image(openGraphImage).width(1600).height(900).url(),
        //   type: 'image/jpeg',
        //   width: 1600,
        //   height: 900,
        //   alt: title,
        // },
        // {
        // Facebook recommended size
        //   url: builder.image(openGraphImage).width(1200).height(630).url(),
        //   type: 'image/jpeg',
        //   width: 1200,
        //   height: 630,
        //   alt: title,
        // },
        // Linkedin recommended size
        // {
        //   url: builder.image(openGraphImage).width(1200).height(644).url(),
        //   type: 'image/jpeg',
        //   width: 1200,
        //   height: 644,
        //   alt: title,
        // },
        {
          url: builder.image(openGraphImage).width(1200).height(627).url(),
          type: 'image/jpeg',
          width: 1200,
          height: 627,
          alt: title,
        },
      ]
    : []

  if (slug === 'demo-success') {
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
            url: process.env.NEXT_PUBLIC_DOMAIN ?? 'https://wespire.com/',
            title: title,
            description: description,
            images: openGraphImages,
          }}
          noindex={disallowRobots}
        />
        <div className="h-[600px] w-full flex justify-center items-center heading-1 text-black">
          Demo Success
        </div>
      </Layout>
    )
  }

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
          url: process.env.NEXT_PUBLIC_DOMAIN ?? 'https://wespire.com/',
          title: title,
          description: description,
          images: openGraphImages,
        }}
        noindex={disallowRobots}
      />
      <Suspense>
        {content?.sections && <RenderSectionsDynamic sections={content?.sections} />}
      </Suspense>
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

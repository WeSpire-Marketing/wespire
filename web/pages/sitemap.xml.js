import groq from 'groq'
import client from '../client'
import {slugToAbsUrl} from '../utils/urls'

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({res}) => {
  const {allRoutesSlugs, allArticlesSlugs, baseUrl} = await client.fetch(groq`{
    // Get the slug of all routes that should be in the sitemap
    "allRoutesSlugs": *[
      _type == "route" &&
      !(_id in path("drafts.**")) &&
      includeInSitemap != false &&
      disallowRobots != true
    ].slug.current,

    // And the base site URL 
    "baseUrl": *[_id == "global-config"][0].url,

    "allArticlesSlugs": *[
      _type == "article" &&
      !(_id in path("drafts.**"))
    ].slug.current,
  }`)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutesSlugs
      .map(
        (slug) => `
    <url>
      <loc>${slugToAbsUrl(slug, baseUrl)}</loc>
    </url>
    `
      )
      .join('\n')}
      ${allArticlesSlugs
        .map(
          (slug) => `
      <url>
        <loc>${slugToAbsUrl(`blog/${slug}`, baseUrl)}</loc>
      </url>
      `
        )
        .join('\n')}
  </urlset>`

  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader('x-content-type-options', 'nosniff')
  res.setHeader('Cache-Control', `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`)
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap

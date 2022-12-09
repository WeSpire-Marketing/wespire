import { LinkIcon } from '@sanity/icons'
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments'

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: LinkIcon,
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Unique value, like: "valid-page-slug"',
      options: {
        isUnique: isUniqueAcrossAllDocuments
      },
      validation: Rule => {
        // spaces regex
        const regEx1 = /\s+/g
        // special chars regex
        const regEx2 = /[&\#,+()$~%.'":*?<>{}]/g
        return Rule.custom(slug => {
          if (!slug?.current) {
            return 'Required'
          } else if (slug.current.match(regEx1)) {
            return 'No spaces in slug'
          } else if (slug.current.startsWith('/') || slug.current.endsWith('/')) {
            return 'Remove "/" from beginning and from the end';
          } else if (slug.current.match(regEx2)) {
            return 'No special characters in slug'
          } else if (slug.current.toLowerCase() !== slug.current) {
            return 'No uppercase letters in slug'
          }
          return true
        })
      }
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      to: [
        {
          type: 'page'
        }
      ]
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml'
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines'
    }
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title'
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`
      }
    }
  }
}

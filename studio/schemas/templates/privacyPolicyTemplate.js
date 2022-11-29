import { BookIcon } from '@sanity/icons'
import { FcBookmark, TableOfContent } from '../helpers/blockContentComponents'

export default {
  name: 'privacyPolicyTemplate',
  title: 'Privacy policy template',
  type: 'object',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO',
    // },
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date',
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      type: 'text',
      title: 'Page overview',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'string'
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean'
                  }
                ],
                initialValue: {
                  blank: false
                }
              },
              {
                name: 'tableOfContent',
                type: 'object',
                title: 'Table of Content',
                fields: [
                  {
                    name: 'title',
                    type: 'string',
                    title: 'Custom title',
                    description: 'optional'
                  }
                ],
                blockEditor: {
                  render: TableOfContent,
                  icon: FcBookmark
                }
              }
            ]
          }
        },
        {
          name: 'table',
          title: 'Table',
          type: 'table'
        }
      ]
    }
  ]
}

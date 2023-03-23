import { OlistIcon, InfoOutlineIcon } from '@sanity/icons'
export default {
  name: 'heroImageAndForm',
  type: 'object',
  title: 'Hero section with image and form',
  fields: [
    {
      name: 'titleSmall',
      type: 'object',
      title: 'Section title H1 Small',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title H1'
        },
        {
          name: 'colorText',
          title: 'Text color',
          type: 'color'
        }
      ]
    },
    {
      name: 'title',
      type: 'string',
      title: 'Section title H2. If not H1 small, this title will be H1',
      description: 'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'text',
    //   type: 'text',
    //   title: 'Text under the title',
    //   validation: Rule => Rule.required()
    // },
    {
      name: 'textHyperlink',
      title: 'Text under the title',
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
                    type: 'url'
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
              }
            ]
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Use only Hubspot form id',
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'link',
    //   type: 'object',
    //   title: 'CTA link',
    //   fields: [
    //     {
    //       name: 'text',
    //       type: 'string',
    //       title: 'Link text',
    //       validation: Rule => Rule.required()
    //     },
    //     {
    //       name: 'url',
    //       type: 'string',
    //       title: 'Link URL',
    //       description:
    //         'Internal link can be like: "/valid-internal-link"; external: "https://wespire.com"',
    //       validation: Rule => Rule.required()
    //     },
    //     {
    //       name: 'internal',
    //       type: 'boolean',
    //       title: 'Internal link',
    //       description: 'By default, the link is external and will be opened in a new tab',
    //       validation: Rule => Rule.required()
    //     }
    //   ],
    //   validation: Rule => Rule.required(),
    //   initialValue: {
    //     internal: false
    //   }
    // },
    {
      name: 'image',
      type: 'object',
      title: 'Section image',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'listFAQ',
      title: 'List of optional FAQ',
      type: 'array',
      icon: OlistIcon,
      of: [
        {
          name: 'cardFAQ',
          title: 'Card FAQ',
          type: 'object',
          icon: InfoOutlineIcon,
          preview: {
            select: {
              title: 'question'
            },
            prepare({ title }) {
              return {
                title,
                media: InfoOutlineIcon
              }
            }
          },
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
              validation: Rule => Rule.required()
            },
            {
              name: 'answer',
              type: 'text',
              title: 'Answer',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}

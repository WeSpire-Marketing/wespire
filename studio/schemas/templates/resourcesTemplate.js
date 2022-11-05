export default {
  name: 'resourcesTemplate',
  title: 'Resources template',
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
      title: 'Hero title',
      description: 'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Text under the hero title',
      validation: Rule => Rule.required()
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards',
      validation: Rule => Rule.required(),
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Card',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Card icon',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              type: 'string',
              title: 'Card title',
              validation: Rule => Rule.required()
            },
            {
              name: 'text',
              type: 'text',
              title: 'Card text',
              validation: Rule => Rule.required()
            },
            {
              name: 'cardColor',
              title: 'Card background-color',
              type: 'colorPicker',
              validation: Rule => Rule.required()
            },
            {
              name: 'link',
              type: 'object',
              title: 'Card link',
              fields: [
                {
                  name: 'url',
                  type: 'string',
                  title: 'Link URL',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'internal',
                  type: 'boolean',
                  title: 'External/internal link',
                  description: 'By default, the link is external and will be opened in a new tab',
                  validation: Rule => Rule.required()
                }
              ],
              validation: Rule => Rule.required(),
              initialValue: {
                internal: false
              }
            }
          ],
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'blogs',
      title: 'List of blogs',
      type: 'array',
      of: [
        {
          name: 'blog',
          title: 'Choose item to show',
          type: 'reference',
          to: { type: 'article' },
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required().max(27)
    },
    {
      name: 'form',
      type: 'object',
      title: 'Form',
      description: 'There are several forms to choose from',
      fields: [
        {
          name: 'isForm',
          type: 'boolean',
          title: 'Show form under the blog cards',
          validation: Rule => Rule.required()
        },
        {
          name: 'form',
          type: 'array',
          title: 'List of forms',
          of: [
            { type: 'ctaForm' },
            { type: 'eventForm' },
            { type: 'subscribeForm' },
            { type: 'authorsQuoteForm' }
          ],
          validation: Rule => Rule.required().length(1)
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'sessionSection',
      type: 'sessionSection'
    }
  ]
}

export default {
  name: 'articlesPressSection',
  type: 'object',
  title: 'Articles and Press section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: 'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: Rule => Rule.required()
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
      name: 'title2',
      type: 'string',
      title: 'Section title #2',
      description: 'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'news',
      type: 'array',
      title: 'News cards',
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'News card',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'News card image',
              validation: Rule => Rule.required()
            },
            {
              name: 'text',
              type: 'text',
              title: 'News card text',
              validation: Rule => Rule.required()
            },
            {
              name: 'link',
              type: 'object',
              title: 'News card link',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'News card link text',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'url',
                  type: 'string',
                  title: 'News card link url',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'internal',
                  type: 'boolean',
                  description: 'By default all links are external and opens in new tab',
                  title: 'External/internal link'
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
      ],
      validation: Rule => Rule.required().length(2)
    }
  ]
}

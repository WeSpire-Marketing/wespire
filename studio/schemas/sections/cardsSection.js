export default {
  name: 'cardsSection',
  title: 'Cards section',
  type: 'object',
  fields: [
    {
      name: 'panelTitle',
      type: 'string',
      title: 'Panel title',
      description:
        'Wrap the word in <span> to show/hide animated star in the title. Example: <span>Easy</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'panelSubtitle',
      type: 'string',
      title: 'Panel subtitle',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Panel cards',
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Card',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Card image',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Card title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'text',
              title: 'Card text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              type: 'object',
              title: 'Card link',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Link text',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'url',
                  type: 'string',
                  title: 'Link url',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'internal',
                  type: 'boolean',
                  title: 'External/internal link',
                  description:
                    'By default all links are external and opens in new tab',
                  validation: (Rule) => Rule.required(),
                },
              ],
              initialValue: {
                internal: false,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().length(2),
    },
    {
      name: 'blogsTitle',
      type: 'string',
      title: 'Title above blog cards',
      description:
        'Wrap the word in <span> to show/hide animated lines in the title. Example: <span>Easy</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blogs',
      type: 'array',
      title: 'Blog cards',
      of: [
        {
          name: 'blog',
          title: 'Choose an article',
          type: 'reference',
          to: { type: 'article' },
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required().max(3),
    },
  ],
}

export default {
  name: 'cardsSectionReport',
  title: 'Cards report section',
  type: 'object',
  fields: [
    {
      name: 'panelTitle',
      type: 'string',
      title: 'Panel title',
      validation: Rule => Rule.required()
    },
    {
      name: 'cards1',
      title: 'Cards 1',
      type: 'object',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Card image',
          validation: Rule => Rule.required()
        },
        {
          name: 'text',
          type: 'text',
          title: 'Card text',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'cards2',
      title: 'Cards 2',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Card title',
          validation: Rule => Rule.required()
        },
        {
          name: 'listOptions',
          type: 'array',
          title: 'List options',
          validation: Rule => Rule.required().max(12),
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'cards3',
      type: 'array',
      title: 'Cards 3',
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
              name: 'link',
              type: 'object',
              title: 'Card link',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Link text',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'url',
                  type: 'string',
                  title: 'Link url',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'internal',
                  type: 'boolean',
                  title: 'External/internal link',
                  description: 'By default all links are external and opens in new tab',
                  validation: Rule => Rule.required()
                }
              ],
              initialValue: {
                internal: false
              },
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule => Rule.required().length(2)
    }
  ]
}

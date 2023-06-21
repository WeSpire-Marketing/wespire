export default {
  name: 'sustainCardsSection',
  type: 'object',
  title: 'Sustainability Cards Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: 'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards list',
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
              type: 'string',
              title: 'Time Limit',
              validation: Rule => Rule.required()
            },
            {
              name: 'cardsUser',
              type: 'array',
              title: 'Cards with participants',
              description: 'Max 3, min 1',
              of: [{ type: 'image', name: 'imageUser' }],
              validation: Rule =>
                Rule.required()
                  .min(1)
                  .max(3)
            },
            {
              name: 'active',
              type: 'string',
              title: 'Active participants',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(12)
    }
  ]
}

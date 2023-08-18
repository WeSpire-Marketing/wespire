export default {
  name: 'bulletSection',
  title: 'Bullet Section',
  type: 'object',
  initialValue: {
    showSection: false
  },
  fields: [
    {
      name: 'showSection',
      type: 'boolean',
      title: 'Show this section?',
      description: 'By default: No'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word in <span> to show/hide animated star in the title. Example: <span>Easy</span>',
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => Boolean(!parent?.showSection)
    },
    {
      name: 'image',
      type: 'image',
      title: 'Card image',
      description: 'SVG image for first card.',
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => Boolean(!parent?.showSection)
    },
    {
      name: 'cardTitle',
      type: 'string',
      title: 'Card title',
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => Boolean(!parent?.showSection)
    },
    {
      name: 'listItem',
      type: 'array',
      title: 'Bullet list',
      description: '26 or less symbols are recommended, 56 are maximum.',
      of: [
        {
          name: 'item',
          type: 'string',
          validation: Rule =>
            Rule.required()
              .min(10)
              .max(52)
        }
      ],
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => Boolean(!parent?.showSection)
    }
  ]
}

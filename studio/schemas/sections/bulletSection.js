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
      description: 'Title under icon for first card.',
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => Boolean(!parent?.showSection)
    },
    {
      name: 'listItem',
      type: 'array',
      title: 'Bullet list',
      description: 'If 26 symbols its been in 1 line if more 2 line, max length 56.',
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

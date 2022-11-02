export default {
  name: 'sessionSection',
  title: 'Latest sessions section',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word in <span> to show/hide animated star in the title. Example: <span>Easy</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [
        {
          name: 'card',
          title: 'Card',
          type: 'reference',
          to: { type: 'article' },
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}

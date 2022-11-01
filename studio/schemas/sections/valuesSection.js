export default {
  name: 'valuesSection',
  title: 'Values Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cards',
      title: 'Value Cards',
      type: 'array',
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Value Card',
          fields: [
            {
              name: 'image',
              title: 'Card image',
              type: 'image',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Card title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Card text',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().length(6),
    },
  ],
}

export default {
  name: 'ourCustomersSection',
  type: 'object',
  title: 'Our customers section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word with <span> to enable animation. Example: <span>Easy</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quote',
      type: 'object',
      title: 'Customer quote',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Quote image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Image description (alt)',
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'name',
          type: 'string',
          title: 'Quote author name',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'job',
          type: 'string',
          title: 'Quote author position',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'text',
          type: 'text',
          title: 'Quote text',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Customer cards',
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Card',
          fields: [
            {
              name: 'suptitle',
              type: 'string',
              title: 'Card text above the title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Card title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'subtitle',
              type: 'string',
              title: 'Card text under the title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'text',
              title: 'Card text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'job',
              type: 'string',
              title: 'Card author position',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              type: 'string',
              title: 'Card author name',
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required().length(2),
    },
  ],
}

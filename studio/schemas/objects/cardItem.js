export default {
  name: 'cardItem',
  type: 'object',
  title: 'High picture',
  description: 'Card with high picture, link and short text',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
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
      name: 'title',
      type: 'object',
      title: 'Card title as link',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Title text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'url',
          type: 'string',
          title: 'URL',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'internal',
          type: 'boolean',
          title: 'External/internal link',
          description:
            'By default, the link is external and will be opened in a new tab',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
      initialValue: {
        internal: false,
      },
    },
    {
      name: 'text',
      type: 'text',
      title: 'Short text',
      validation: (Rule) => Rule.required(),
    },
  ],
}

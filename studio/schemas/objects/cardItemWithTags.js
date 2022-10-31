export default {
  name: 'cardItemWithTags',
  type: 'object',
  title: 'Card with tags',
  description: 'Card with high picture, tags, link and short text',
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
      name: 'tags',
      type: 'array',
      title: 'Card tags',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'object',
          fields: [
            {
              name: 'value',
              type: 'string',
              title: 'Tag text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'color',
              title: 'Tag color',
              type: 'colorPicker',
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required().max(3),
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

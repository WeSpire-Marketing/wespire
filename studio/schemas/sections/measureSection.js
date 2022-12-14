export default {
  name: 'measureSection',
  type: 'object',
  title: 'Measure section',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
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
      type: 'string',
      title: 'Section title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Text under the title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'object',
      title: 'Section link',
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
          description: 'By default all links are external and opens in new tab',
          validation: (Rule) => Rule.required(),
        },
      ],
      initialValue: {
        internal: false,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cols',
      type: 'array',
      title: 'Text columns under image',
      of: [
        {
          name: 'col',
          type: 'object',
          title: 'Text column',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Column title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'text',
              title: 'Column text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(4),
    },
  ],
}

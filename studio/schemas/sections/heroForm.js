export default {
  name: 'heroForm',
  type: 'object',
  title: 'Hero section with form',
  fields: [
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
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word with <span> to enable animation. Example: <span>Easy</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Text under the title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Use only Hubspot form id',
      validation: (Rule) => Rule.required(),
    },
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
      name: 'sponsors',
      type: 'array',
      title: 'Partners and sponsors logos ticker',
      of: [
        {
          name: 'sponsor',
          type: 'object',
          title: 'Sponsor',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Sponsor name',
              desctiption: 'Also used as description (alt)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Sponsor logo',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(7),
    },
  ],
}

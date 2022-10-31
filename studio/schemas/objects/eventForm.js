export default {
  name: 'eventForm',
  type: 'object',
  title: 'Event Form',
  fields: [
    {
      name: 'suptitle',
      type: 'string',
      title: 'Text above the CTA Text (left)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'CTA Text (left)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'object',
      title: 'CTA Link',
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
          title: 'Link URL',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'speakers',
      type: 'array',
      title: 'Event speakers',
      validation: (Rule) => Rule.required().max(3),
      of: [
        {
          name: 'speaker',
          type: 'object',
          title: 'Speaker',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Speaker name',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'job',
              type: 'string',
              title: 'Speaker position',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Speaker image',
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Image description (alt)',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'tag',
      type: 'string',
      title: 'CTA Tag (right)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text (right)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date (right)',
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    suptitle: 'Upcoming event',
    title: 'Top trends for leading distributed teams in 2023',
    link: {
      text: 'Save your seat',
      url: 'https://thiscatdoesnotexist.com',
      internal: false,
    },
    tag: 'Event',
    text: `We brought three CEOs together to learn how they're leading their  teams and what they're seeing and predicting for the next 12 to 24 months.    `,
    date: 'May 02,2022 | 01:00 PM PT',
  },
}

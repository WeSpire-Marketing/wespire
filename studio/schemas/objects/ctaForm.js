export default {
  name: 'ctaForm',
  type: 'object',
  title: 'CTA Form',
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
    suptitle: 'Webinar',
    title: 'How to Build Office Culture in the Era of Hybrid Work',
    link: {
      text: 'Explore more',
      url: 'https://thiscatdoesnotexist.com',
      internal: false,
    },
    tag: 'Webinar',
    text: `Office culture is no longer contained by the four walls of a physical 
    workplace. Instead, it’s built in the remote and hybrid spaces where work happens.`,
    date: 'May 02,2022 | 01:00 PM PT',
  },
}

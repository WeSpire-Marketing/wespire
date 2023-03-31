export default {
  name: 'upcomingEventSection',
  title: 'Upcoming Event Section',
  type: 'object',
  initialValue: {
    showSection: false
  },
  fields: [
    {
      name: 'showSection',
      type: 'boolean',
      title: 'Display Upcoming Event section?',
      description: 'By default: false'
    },
    {
      title: 'Event content',
      name: 'contentData',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Event title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'label',
          title: 'Event label',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'place',
          title: 'Event Place and Date',
          type: 'string',
          description: 'Example: March 28-31, 2023 | Sydney, Australia',
          validation: Rule => Rule.required()
        },
        {
          name: 'description',
          title: 'Event description',
          type: 'text',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => !Boolean(parent?.showSection)
    },
    {
      name: 'imageData',
      type: 'object',
      title: 'Event image',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => !Boolean(parent?.showSection)
    },
    {
      name: 'link',
      type: 'object',
      title: 'Learn more link',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Link text',
          validation: Rule => Rule.required()
        },
        {
          name: 'url',
          type: 'string',
          title: 'Link URL',
          description:
            'Internal link can be like: "/valid-internal-link"; external: "https://wespire.com"',
          validation: Rule => Rule.required()
        },
        {
          name: 'internal',
          type: 'boolean',
          title: 'External/internal link',
          description: 'By default, the link is external and will be opened in a new tab',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => !Boolean(parent?.showSection),
      initialValue: {
        internal: false
      }
    }
  ]
}

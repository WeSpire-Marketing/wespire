export default {
  name: 'tabsSection',
  type: 'object',
  title: 'Tabs section',
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
      name: 'tabs',
      type: 'array',
      title: 'Section tabs',
      of: [
        {
          name: 'tab',
          type: 'object',
          title: 'Tab',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Tab name',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Tab content title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'text',
              title: 'Tab content text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              type: 'object',
              title: 'Tab content link',
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
                  description:
                    'By default all links are external and opens in new tab',
                  validation: (Rule) => Rule.required(),
                },
              ],
              initialValue: {
                internal: false,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Tab content image',
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
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(4),
    },
  ],
}

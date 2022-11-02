export default {
  name: 'hostsSection',
  type: 'object',
  title: 'Meet the hosts section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Hosts cards',
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Host card',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Host card image',
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
              name: 'color',
              title: 'Card color',
              type: 'colorPicker',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              type: 'string',
              title: 'Card host name',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'job',
              type: 'string',
              title: 'Card host position',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'field1',
              type: 'string',
              title: 'Card field 1',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'field2',
              type: 'string',
              title: 'Card field 2',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'field3',
              type: 'string',
              title: 'Card field 3',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'field4',
              type: 'string',
              title: 'Card field 4',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'field5',
              type: 'string',
              title: 'Card field 5',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'field6',
              type: 'string',
              title: 'Card field 6',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              type: 'object',
              title: 'CTA Link',
              fields: [
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
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}

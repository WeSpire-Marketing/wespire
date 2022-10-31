export default {
  name: 'sliderSection',
  type: 'object',
  title: 'Slider section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Slider cards',
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Card',
          fields: [
            {
              name: 'imageData',
              type: 'object',
              title: 'Card image',
              fields: [
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Image description',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              name: 'title',
              type: 'string',
              title: 'Card title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'text',
              title: 'Card text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              type: 'object',
              title: 'Card link',
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
                  title: 'External/internal',
                  description:
                    'By default all links are external and opens in new tab',
                  validation: (Rule) => Rule.required(),
                },
              ],
              initialValue: {
                internal: false,
              },
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(3),
    },
  ],
}

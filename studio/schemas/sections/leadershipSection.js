export default {
  name: 'leadershipSection',
  type: 'object',
  title: 'Leadership section',
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Blocks of text and personal cards',
      of: [
        {
          name: 'item',
          type: 'object',
          title: 'List with title',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              description:
                'Wrap the word in <span> to show animation. Example: <span>Easy</span>',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'subtitle',
              type: 'string',
              title: 'Short text under the title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'cards',
              type: 'array',
              title: 'List of personal cards',
              validation: (Rule) => Rule.required(),
              of: [
                {
                  name: 'card',
                  type: 'object',
                  title: 'Personal card',
                  validation: (Rule) => Rule.required(),
                  fields: [
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Leader card image',
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
                      name: 'name',
                      type: 'string',
                      title: 'Leader name',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'job',
                      type: 'array',
                      title: 'Leader position',
                      of: [
                        {
                          type: 'block',
                        },
                      ],
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'bgColor',
                      title: 'Pick card color',
                      type: 'colorPicker',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Title on the back side of card',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'text',
                      type: 'text',
                      title: 'Text on the back side of card',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'socials',
                      type: 'object',
                      title: 'Socials on the back side of card',
                      fields: [
                        {
                          name: 'items',
                          type: 'array',
                          title: 'List of social links with icons',
                          validation: (Rule) => Rule.required().max(4),
                          of: [
                            {
                              name: 'social',
                              type: 'object',
                              title: 'Social link',
                              validation: (Rule) => Rule.required(),
                              fields: [
                                {
                                  name: 'icon',
                                  type: 'image',
                                  title: 'Social icon',
                                  fields: [
                                    {
                                      name: 'alt',
                                      type: 'string',
                                      title: 'Image description (alt)',
                                      validation: (Rule) => Rule.required(),
                                    },
                                  ],
                                },
                                {
                                  name: 'url',
                                  type: 'url',
                                  title: 'Social link URL',
                                  validation: (Rule) => Rule.required(),
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}

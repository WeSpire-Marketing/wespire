export default {
  name: 'careersTemplate',
  title: 'Careers template',
  type: 'object',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO',
    // },
    {
      name: 'sections',
      type: 'object',
      title: 'Page content',
      fields: [
        {
          name: 'careersHeroSection',
          type: 'object',
          title: 'Hero section with image',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Section title',
              description:
                'Wrap the word in <span> to show/hide animated star in the title. Example: <span>Easy</span>',
              validation: Rule => Rule.required()
            },
            {
              name: 'subtitle',
              type: 'text',
              title: 'Text under the title',
              validation: Rule => Rule.required()
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
                  validation: Rule => Rule.required()
                }
              ],
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
        },
        {
          name: 'openingsSection',
          type: 'object',
          title: 'Openings section',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Section title',
              description:
                'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
              validation: Rule => Rule.required()
            },
            {
              name: 'openings',
              type: 'array',
              title: 'Openings',
              of: [
                {
                  name: 'opening',
                  type: 'object',
                  title: 'Opening card',
                  fields: [
                    {
                      name: 'name',
                      type: 'string',
                      title: 'Opening name',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'position',
                      type: 'string',
                      title: 'Opening position',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'link',
                      type: 'object',
                      title: 'Opening link',
                      fields: [
                        {
                          name: 'url',
                          type: 'string',
                          title: 'Opening link url',
                          validation: Rule => Rule.required()
                        },
                        {
                          name: 'internal',
                          type: 'boolean',
                          description: 'By default all links are external and opens in new tab',
                          title: 'External/internal link'
                        }
                      ],
                      validation: Rule => Rule.required(),
                      initialValue: {
                        internal: false
                      }
                    }
                  ],
                  validation: Rule => Rule.required()
                }
              ],
            }
          ],
          valitaion: Rule => Rule.required()
        }
      ]
    }
  ]
}

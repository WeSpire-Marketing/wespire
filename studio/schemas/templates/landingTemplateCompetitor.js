export default {
  name: 'landingTemplateCompetitor',
  title: 'Landing template competitor',
  type: 'object',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO',
    // },
    {
      name: 'hideDesktopNav',
      type: 'boolean',
      title: 'Hide desktop navigation',
      readOnly: true,
      initialValue: () => true
      // validation: Rule => Rule.required()
    },
    {
      name: 'hideMobileNav',
      type: 'boolean',
      title: 'Hide mobile navigation',
      readOnly: true,
      initialValue: () => false
      // validation: Rule => Rule.required()
    },
    {
      name: 'sections',
      type: 'object',
      title: 'Page sections',
      collapsible: true,
      fields: [
        { name: 'heroForm', title: 'Hero form section', type: 'heroForm' },
        {
          name: 'cardsSection',
          title: 'Cards section',
          type: 'object',
          fields: [
            {
              name: 'panelTitle',
              type: 'string',
              title: 'Panel title',
              description:
                'Wrap the word in <span> to show/hide animated star in the title. Example: <span>Easy</span>',
              validation: Rule => Rule.required()
            },
            {
              name: 'panelSubtitle',
              type: 'text',
              title: 'Panel subtitle',
              validation: Rule => Rule.required()
            },
            {
              name: 'cards',
              type: 'array',
              title: 'Panel cards',
              of: [
                {
                  name: 'card',
                  type: 'object',
                  title: 'Card',
                  fields: [
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Card image',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Card title',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'text',
                      type: 'text',
                      title: 'Card text',
                      validation: Rule => Rule.required()
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
                          validation: Rule => Rule.required()
                        },
                        {
                          name: 'url',
                          type: 'string',
                          title: 'Link url',
                          validation: Rule => Rule.required()
                        },
                        {
                          name: 'internal',
                          type: 'boolean',
                          title: 'External/internal link',
                          description: 'By default all links are external and opens in new tab',
                          validation: Rule => Rule.required()
                        }
                      ],
                      initialValue: {
                        internal: false
                      },
                      validation: Rule => Rule.required()
                    }
                  ]
                }
              ]
              // validation: Rule => Rule.required().length(2)
            }
          ]
        },
        { name: 'tabsSection', title: 'Tabs section', type: 'tabsSection' },
        {
          name: 'ourCustomersSection',
          title: 'Our customers section',
          type: 'ourCustomersSection'
        },
        {
          name: 'awardsSection',
          title: 'Awards section',
          type: 'awardsSection'
        },
        {
          name: 'ctaSection',
          title: 'CTA section',
          type: 'ctaSection'
        },
        {
          name: 'footer',
          type: 'object',
          title: 'Page footer',
          fields: [
            {
              name: 'brand',
              type: 'string',
              title: 'Year and brand',
              validation: Rule => Rule.required()
            },
            {
              name: 'socials',
              type: 'array',
              title: 'Footer socials',
              of: [
                {
                  name: 'item',
                  type: 'object',
                  title: 'Social item',
                  validation: Rule => Rule.required(),
                  fields: [
                    {
                      name: 'icon',
                      type: 'image',
                      title: 'Social icon',
                      fields: [
                        {
                          name: 'alt',
                          type: 'string',
                          title: 'Image description',
                          validation: Rule => Rule.required()
                        },
                        {
                          name: 'link',
                          type: 'url',
                          title: 'Social link',
                          validation: Rule => Rule.required()
                        }
                      ],
                      validation: Rule => Rule.required()
                    }
                  ]
                }
              ],
              validation: Rule => Rule.required().max(4)
            }
          ],
          validation: Rule => Rule.required()
        }
      ]
    }
  ]
}

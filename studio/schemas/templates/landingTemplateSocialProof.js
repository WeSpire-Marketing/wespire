export default {
  name: 'landingTemplateSocialProof',
  title: 'Social Proof Landing template',
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
      fields: [
        { name: 'heroForm', title: 'Hero form section', type: 'heroForm' },
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
        { name: 'tabsSection', title: 'Tabs section', type: 'tabsSection' },
        { name: 'measureSection', type: 'measureSection' },
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

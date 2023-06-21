import { BlockquoteIcon } from '@sanity/icons'
export default {
  name: 'landingTemplateSustainability',
  title: 'Landing template sustainability',
  type: 'object',
  icon: BlockquoteIcon,
  preview: {
    prepare({ title = 'Landing Report template' }) {
      return {
        title: title
      }
    }
  },
  fields: [
    {
      name: 'hideDesktopNav',
      type: 'boolean',
      title: 'Hide desktop navigation',
      readOnly: true,
      hidden: true,
      initialValue: () => true
      // validation: Rule => Rule.required()
    },
    {
      name: 'hideMobileNav',
      type: 'boolean',
      title: 'Hide mobile navigation',
      readOnly: true,
      hidden: true,
      initialValue: () => false
      // validation: Rule => Rule.required()
    },
    {
      name: 'sections',
      type: 'object',
      title: 'Page sections',
      collapsible: true,
      fields: [
        {
          name: 'heroFormSustainability',
          title: 'Hero form section',
          type: 'heroFormSustainability'
        },
        {
          name: 'sustainCardsSection',
          title: 'Cards Section',
          type: 'sustainCardsSection'
        },
        { name: 'imageTextSection', type: 'imageTextSection' },
        { name: 'tabsSection', title: 'Tabs section', type: 'tabsSection' },
        {
          name: 'ourCustomersSection',
          title: 'Our customers section',
          type: 'ourCustomersSection'
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

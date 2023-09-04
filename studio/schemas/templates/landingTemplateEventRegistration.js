import { EnvelopeIcon } from '@sanity/icons'

export default {
  name: 'landingTemplateEventRegistration',
  title: 'Landing template Event Registration',
  type: 'object',
  icon: EnvelopeIcon,
  preview: {
    prepare({ title = 'Landing Event Registration template' }) {
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
          type: 'heroEventRegistrationSection',
          name: 'heroEventRegistrationSection'
        },
        {
          type: 'eventSection',
          name: 'eventSection'
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

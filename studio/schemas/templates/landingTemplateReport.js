import { pageGroups, ID_FIELD } from '../helpers/fields'
import tabsSection from '../sections/tabsSection'
import { ActivityIcon } from '@sanity/icons'

export default {
  name: 'landingTemplateReport',
  title: 'Landing template report',
  type: 'object',
  icon: ActivityIcon,
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
      groups: pageGroups,
      fields: [
        // HERO SECTION
        {
          type: 'object',
          name: 'heroReport',
          title: 'Hero Section',
          group: 'hero',
          fields: [
            {
              name: 'navBtnName',
              title: 'Navigation button name',
              type: 'string',
              validation: Rule => Rule.required().max(20)
            },
            {
              name: 'menuItems',
              type: 'array',
              title: 'Menu',
              of: [
                {
                  name: 'menuItem',
                  type: 'object',
                  title: 'List of links with title',
                  fields: [
                    {
                      name: 'heading',
                      type: 'string',
                      title: 'Title',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Item image',
                      fields: [
                        {
                          name: 'alt',
                          type: 'string',
                          title: 'Image description (alt)',
                          validation: Rule => Rule.required()
                        }
                      ],
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'text',
                      type: 'text',
                      title: 'Short text',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'id',
                      description: 'Used to link to the section',
                      type: 'string'
                    }
                  ],
                  validation: Rule => Rule.required()
                }
              ],
              validation: Rule =>
                Rule.required()
                  .min(6)
                  .max(6)
            },
            {
              name: 'link',
              type: 'object',
              title: 'Link',
              description: 'Link to the right of the menu',
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
              initialValue: {
                internal: false
              }
            },
            {
              name: 'title',
              title: 'Section title',
              description:
                'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'text',
              title: 'Text under the title',
              type: 'text',
              validation: Rule => Rule.required()
            },
            {
              name: 'imageList',
              type: 'array',
              title: 'List of Images',
              of: [
                {
                  name: 'image',
                  type: 'image',
                  title: 'Item image',
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
              validation: Rule =>
                Rule.required()
                  .min(1)
                  .max(3)
            }
          ]
        },
        // TABS 1 SECTION 1
        {
          name: 'tabsSection1',
          title: 'Tabs section 1',
          type: 'object',
          group: 'tabs',
          fields: [ID_FIELD, tabsSection]
        },
        // TABS 3 SECTION 2
        {
          name: 'tabsVertical',
          type: 'object',
          title: 'Section tabs vertical',
          group: 'tabs',
          fields: [
            ID_FIELD,
            {
              name: 'title',
              type: 'string',
              title: 'Section title',
              description:
                'Wrap the word with <span> to enable animation. Example: <span>Easy</span>',
              validation: Rule => Rule.required()
            },
            {
              name: 'tabsList',
              type: 'array',
              title: 'List of tabs',
              of: [
                {
                  name: 'tab',
                  type: 'object',
                  title: 'Tab',
                  validation: Rule => Rule.required(),
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Tab content title',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'text',
                      type: 'text',
                      title: 'Tab content text',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'link',
                      type: 'object',
                      title: 'Tab content link',
                      fields: [
                        {
                          name: 'visibility',
                          title: 'Show button?',
                          type: 'boolean',
                          initialValue: () => true
                        },
                        {
                          name: 'text',
                          type: 'string',
                          title: 'Link text',
                          hidden: ({ parent }) => !Boolean(parent?.visibility)
                        },
                        {
                          name: 'url',
                          type: 'string',
                          title: 'Link url',
                          hidden: ({ parent }) => !Boolean(parent?.visibility)
                        },
                        {
                          name: 'internal',
                          type: 'boolean',
                          title: 'External/internal link',
                          description: 'By default all links are external and opens in new tab',
                          hidden: ({ parent }) => !Boolean(parent?.visibility)
                        }
                      ],
                      initialValue: {
                        internal: false
                      },
                      validation: Rule => Rule.required()
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
                          validation: Rule => Rule.required()
                        },
                        {
                          name: 'text',
                          type: 'text',
                          title: 'Text under the image, optional'
                        }
                      ],
                      validation: Rule => Rule.required()
                    }
                  ]
                }
              ],
              validation: Rule => Rule.required().max(8)
            }
          ],
          validation: Rule => Rule.required()
        },
        // TABS 2 SECTION 3
        {
          name: 'tabsSection2',
          title: 'Tabs section 2',
          type: 'object',
          group: 'tabs',
          fields: [ID_FIELD, tabsSection]
        },
        //SLIDER SECTION 4
        {
          name: 'sliderReportSection1',
          title: 'Slider section 1',
          type: 'sliderReportSection',
          group: 'slider'
        },
        //TABLE SECTION 5
        { name: 'tableImageSection', type: 'tableImage', group: 'slider' },
        // CARDS SECTION 6
        { name: 'cardsSectionReport', type: 'cardsSectionReport', group: 'cards' },
        // TABS 3 SECTION 7
        {
          name: 'tabsSection3',
          title: 'Tabs section 3',
          type: 'object',
          group: 'tabs',
          fields: [ID_FIELD, tabsSection]
        },
        // SLIDER SECTION 8
        {
          name: 'sliderReportSection2',
          title: 'Slider section 2',
          type: 'sliderReportSection',
          group: 'slider'
        },
        // FAQ SECTION 9
        { name: 'googleFAQSection', type: 'googleFAQSection', group: 'faq' },
        // CTA SECTION 10
        {
          name: 'ctaSection',
          title: 'CTA section',
          type: 'ctaSection',
          group: 'cta'
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
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
        }
      ]
    }
  ]
}

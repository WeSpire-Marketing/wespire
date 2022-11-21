import bcp47 from 'bcp47'
import { ControlsIcon } from '@sanity/icons'

export default {
  name: 'site-config',
  type: 'document',
  icon: ControlsIcon,
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/* "create", "delete", */ 'update', 'publish'],
  fieldsets: [{ name: 'footer', title: 'Footer' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url'
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'page' }
    },
    {
      title: 'Site language',
      description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      type: 'string',
      validation: Rule =>
        Rule.custom(lang => (bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'))
    },
    {
      title: 'Brand logo',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      validation: Rule => Rule.required(),
      type: 'object',
      fields: [
        {
          name: 'nav',
          type: 'array',
          title: 'Menu',
          of: [
            {
              name: 'navLink',
              type: 'object',
              title: 'Menu link',
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
                  description:
                    'Internal link can be like: "/valid-internal-link"; external: "https://wespire.com"',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'internal',
                  type: 'boolean',
                  title: 'Internal link',
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
              name: 'navItem',
              type: 'object',
              title: 'Menu item',
              description: 'Shows dropdown menu while hover',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Item text',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'cols',
                  type: 'object',
                  title: 'Menu columns',
                  fields: [
                    {
                      name: 'col1',
                      type: 'array',
                      title: 'Column #1',
                      of: [
                        { name: 'textItem', type: 'textItem' },
                        { name: 'bigImgItem', type: 'bigImgItem' },
                        { name: 'cardItem', type: 'cardItem' },
                        { name: 'imgItem', type: 'imgItem' },
                        { name: 'imgItemHoriz', type: 'imgItemHoriz' },
                        { name: 'menuList', type: 'menuList' },
                        { name: 'menuLink', type: 'menuLink' },
                        { name: 'namedChildrens', type: 'namedChildrens' },
                        { name: 'cardItemWithTags', type: 'cardItemWithTags' }
                      ],
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'col2',
                      type: 'array',
                      title: 'Column #2',
                      of: [
                        { name: 'textItem', type: 'textItem' },
                        { name: 'bigImgItem', type: 'bigImgItem' },
                        { name: 'cardItem', type: 'cardItem' },
                        { name: 'imgItem', type: 'imgItem' },
                        { name: 'imgItemHoriz', type: 'imgItemHoriz' },
                        { name: 'menuList', type: 'menuList' },
                        { name: 'menuLink', type: 'menuLink' },
                        { name: 'namedChildrens', type: 'namedChildrens' },
                        { name: 'cardItemWithTags', type: 'cardItemWithTags' }
                      ],
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'col3',
                      type: 'array',
                      title: 'Column #3',
                      of: [
                        { name: 'textItem', type: 'textItem' },
                        { name: 'bigImgItem', type: 'bigImgItem' },
                        { name: 'cardItem', type: 'cardItem' },
                        { name: 'imgItem', type: 'imgItem' },
                        { name: 'imgItemHoriz', type: 'imgItemHoriz' },
                        { name: 'menuList', type: 'menuList' },
                        { name: 'menuLink', type: 'menuLink' },
                        { name: 'namedChildrens', type: 'namedChildrens' },
                        { name: 'cardItemWithTags', type: 'cardItemWithTags' }
                      ],
                      validation: Rule => Rule.required()
                    }
                  ],
                  validation: Rule => Rule.required()
                }
              ],
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
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
        }
      ]
    },
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'object',
      valiation: Rule => Rule.required(),
      fields: [
        {
          name: 'logo',
          type: 'image',
          title: 'Logo',
          validation: Rule => Rule.required()
        },
        {
          name: 'address',
          type: 'string',
          title: 'Address',
          validation: Rule => Rule.required()
        },
        {
          name: 'socials',
          type: 'array',
          title: 'Socials',
          validation: Rule => Rule.required(),
          of: [
            {
              name: 'socialItem',
              type: 'object',
              title: 'Social Item',
              fields: [
                {
                  name: 'image',
                  type: 'image',
                  title: 'Social icon',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'link',
                  type: 'url',
                  title: 'Social link',
                  validation: Rule => Rule.required()
                }
              ],
              valiation: Rule => Rule.required()
            }
          ]
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
                  name: 'links',
                  type: 'array',
                  title: 'Links',
                  valiation: Rule => Rule.required(),
                  of: [
                    {
                      name: 'link',
                      type: 'object',
                      title: 'Link',
                      validation: Rule => Rule.required(),
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
                      initialValues: {
                        internal: false
                      }
                    }
                  ]
                }
              ],
              validation: Rule => Rule.required()
            }
          ]
        },
        {
          name: 'year',
          type: 'string',
          title: 'Year and company',
          validation: Rule => Rule.required()
        },
        {
          name: 'privacy',
          type: 'object',
          title: 'Privacy policy',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Privacy text',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              type: 'string',
              title: 'Privacy page url',
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
          validation: Rule => Rule.required()
        },
        {
          name: 'policy',
          type: 'object',
          title: 'Terms and Conditions',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Terms and Conditions text',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              type: 'string',
              title: 'Terms and Conditions page url',
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
          validation: Rule => Rule.required()
        }
      ]
    }
  ]
}

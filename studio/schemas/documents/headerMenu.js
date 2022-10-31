export default {
  name: 'headerMenu',
  type: 'object',
  title: 'Megamenu',
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
}

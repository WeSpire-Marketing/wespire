export default {
  name: 'menuList',
  type: 'object',
  title: 'Menu list',
  description: 'List of links and/or text',
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          name: 'link',
          type: 'object',
          title: 'List link',
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
              title: 'Link URL',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'internal',
              type: 'boolean',
              title: 'External/internal link',
              description:
                'By default all links are external and opens in new tab',
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        // {
        //   name: 'text',
        //   type: 'object',
        //   title: 'List text',
        //   fields: [
        //     {
        //       name: 'text',
        //       type: 'string',
        //       title: 'Text',
        //       validation: (Rule) => Rule.required(),
        //     },
        //   ],
        //   validation: (Rule) => Rule.required(),
        // },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}

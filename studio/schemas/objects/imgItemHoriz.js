export default {
  name: 'imgItemHoriz',
  type: 'object',
  title: 'Horizontal card',
  description: 'Menu item with image, title as link and short subtext',
  fields: [
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
      name: 'title',
      type: 'object',
      title: 'Card title as link',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Title text',
          validation: Rule => Rule.required()
        },
        {
          name: 'url',
          type: 'string',
          title: 'URL',
          description:
            'Internal link can be like: "/valid-internal-link"; external: "https://wespire.com"',
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
      name: 'text',
      type: 'text',
      title: 'Short text',
      validation: Rule => Rule.required()
    }
  ]
}

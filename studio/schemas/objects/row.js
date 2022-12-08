export default {
  name: 'row',
  type: 'object',
  title: 'Row',
  fields: [
    {
      name: 'imageData',
      type: 'object',
      title: 'Image',
      description: 'Recommended image size 600x375',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'imageAlt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'cardColor',
      title: 'Image card background-color',
      type: 'colorPicker',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Row title',
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text under the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      type: 'object',
      title: 'Learn more link',
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

export default {
  name: 'ctaSection',
  title: 'Call To Action section',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section text',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      type: 'object',
      title: 'Section link',
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
          title: 'Internal link',
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

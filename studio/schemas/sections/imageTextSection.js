export default {
  name: 'imageTextSection',
  type: 'object',
  title: 'Image Text Section',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
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
      type: 'string',
      title: 'Section title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Text under the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      type: 'object',
      title: 'Section link',
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
      initialValue: {
        internal: false
      },
      validation: Rule => Rule.required()
    }
  ]
}

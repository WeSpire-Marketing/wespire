export default {
  name: 'formImageSection',
  type: 'object',
  title: 'Form & Image Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title H2. If not H1 small, this title will be H1',
      description: 'Wrap the word with <span> to enable animation. Example: <span>Easy</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Text under the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Use only Hubspot form id',
      validation: Rule => Rule.required()
    },
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
    }
  ]
}

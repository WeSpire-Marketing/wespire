export default {
  name: 'ctaPdfSection',
  title: 'CTA with pdf section',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section text',
      validation: Rule => Rule.required()
    },
    {
      name: 'file',
      type: 'file',
      title: 'PDF file',
      fields: [
        {
          name: 'buttonText',
          type: 'string',
          title: 'Download button text',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }
  ]
}

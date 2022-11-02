export default {
  name: 'contactusSection',
  type: 'object',
  title: 'Contact us section',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO',
    // },
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'title',
      type: 'string',
      title: 'Form title',
      description: 'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
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
      name: 'cols',
      type: 'array',
      title: 'Columns with title under the image',
      validation: Rule => Rule.required().max(3),
      of: [
        {
          name: 'col',
          type: 'object',
          title: 'Column',
          validation: Rule => Rule.required(),
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Column title',
              validation: Rule => Rule.required()
            },
            {
              name: 'text',
              type: 'text',
              title: 'Column text',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}

export default {
  name: 'subscribeForm',
  type: 'object',
  title: 'Subscribe Form',
  fields: [
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Hubspot Subscribe form id: 2c551e2c-55f8-4611-9fb9-fb04236d21b6',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Form title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Form subtitle',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Form icon',
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
  ],
  initialValue: {
    formId: '2c551e2c-55f8-4611-9fb9-fb04236d21b6',
    title: 'Subscribe to our newsletter',
    subtitle: 'CSR, Engagement & Purpose tips directly in your inbox!'
  }
}

export default {
  name: 'privacyPolicyTemplate',
  title: 'Privacy policy template',
  type: 'object',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO',
    // },
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date',
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      type: 'text',
      title: 'Page overview',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          name: 'table',
          title: 'Table',
          type: 'table'
        }
      ]
    }
  ]
}

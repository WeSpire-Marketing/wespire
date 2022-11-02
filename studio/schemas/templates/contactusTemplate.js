export default {
  name: 'contactusTemplate',
  title: 'Contact Us template',
  type: 'object',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO'
    // },
    {
      name: 'sections',
      type: 'object',
      title: 'Page sections',
      fields: [{ name: 'contactusSection', type: 'contactusSection' }]
    }
  ]
}

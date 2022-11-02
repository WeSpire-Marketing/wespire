export default {
  name: 'customersTemplate',
  title: 'Customers template',
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
      fields: [
        { name: 'heroQuote', type: 'heroQuote' },
        { name: 'customerStoriesSection', type: 'customerStoriesSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ]
    }
  ]
}

export default {
  name: 'productTemplate',
  title: 'Product template',
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
        { name: 'heroImageAndForm', type: 'heroImageAndForm' },
        { name: 'contentSection', type: 'contentSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ]
    }
  ]
}

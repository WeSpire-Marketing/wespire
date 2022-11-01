export default {
  name: 'whyWespireTemplate',
  title: 'Why WeSpire template',
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
        { name: 'heroInfoSection', type: 'heroInfoSection' },
        { name: 'imageSection', type: 'imageSection' },
        { name: 'quoteSection', type: 'quoteSection' },
        { name: 'valuesSection', type: 'valuesSection' },
        { name: 'openingsPressSection', type: 'openingsPressSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ]
    }
  ]
}

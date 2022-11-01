export default {
  name: 'solutionsOverviewTemplate',
  title: 'Solutions overview template',
  type: 'object',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO',
    // },
    {
      name: 'sections',
      type: 'object',
      title: 'Page sections',
      fields: [
        { name: 'heroVideo', type: 'heroVideo' },
        { name: 'sliderSection', type: 'sliderSection' },
        { name: 'capabilitiesSection', type: 'capabilitiesSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ]
    }
  ]
}

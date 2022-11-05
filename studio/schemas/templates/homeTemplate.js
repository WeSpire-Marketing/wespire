export default {
  name: 'homeTemplate',
  title: 'Home template',
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
        { name: 'heroSection', type: 'heroSection' },
        { name: 'longSection', type: 'longSection' },
        { name: 'sliderSection', type: 'sliderSection' },
        { name: 'cardsSection', type: 'cardsSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ]
    }
  ]
}

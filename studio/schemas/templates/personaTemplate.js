export default {
  name: 'personaTemplate',
  title: 'Persona template',
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
        { name: 'heroCTASection', type: 'heroCTASection' },
        { name: 'contentSection', type: 'contentSection' },
        { name: 'blogCardsSection', type: 'blogCardsSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ]
    }
  ]
}

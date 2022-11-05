export default {
  name: 'newsRoomTemplate',
  title: 'Newsroom template',
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
        { name: 'heroCTAFormSection', type: 'heroCTAFormSection' },
        { name: 'articlesPressSection', type: 'articlesPressSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ]
    }
  ]
}

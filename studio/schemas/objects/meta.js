export default {
  name: 'pageMeta',
  title: 'Page meta',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Page title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Page description',
      description: 'Recommended length is between 150 - 300 characters',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'ogTitle',
      title: 'Og Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'ogDescription',
      title: 'Og Description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'twitterSite',
      title: 'Twitter Site',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      description: 'This image will be used for Open Graph and Twitter, Facebook etc cards',
      type: 'image',
      validation: Rule => Rule.required()
    }
  ],
  initialValue: {
    type: 'website'
  }
}

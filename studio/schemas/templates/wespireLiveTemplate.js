export default {
  name: 'wespireLiveTemplate',
  type: 'object',
  title: 'Wespire live template',
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
        {
          name: 'formSection',
          type: 'object',
          title: 'Form section',
          fields: [
            {
              name: 'form',
              type: 'object',
              title: 'Form',
              description: 'There are several forms to choose from',
              fields: [
                {
                  name: 'isForm',
                  type: 'boolean',
                  title: 'Show form',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'form',
                  type: 'array',
                  title: 'List of forms',
                  of: [
                    { type: 'ctaForm' },
                    { type: 'eventForm' },
                    { type: 'subscribeForm' },
                    { type: 'authorsQuoteForm' }
                  ],
                  validation: Rule => Rule.required().length(1)
                }
              ],
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
        },
        { name: 'hostsSection', type: 'hostsSection' },
        { name: 'mostPopularSection', type: 'mostPopularSection' },
        {
          name: 'categoriesWithBlogsSection',
          type: 'categoriesWithBlogsSection'
        },
        { name: 'sessionSection', type: 'sessionSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ]
    }
  ]
}

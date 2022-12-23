export default {
  name: 'blogTemplate',
  title: 'Blog template',
  type: 'object',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO'
    // },
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Text under the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Use only Hubspot form id',
      validation: Rule => Rule.required()
    },
    {
      name: 'form1',
      type: 'object',
      title: 'Form 1',
      description: 'There are several forms to choose from',
      fields: [
        {
          name: 'isForm',
          type: 'boolean',
          title: 'Show form above the categories',
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
    },
    {
      name: 'defaultCategory',
      title: 'Default category',
      description: 'Main category for displaying the list of articles on the page',
      type: 'reference',
      to: [{ type: 'category', validation: Rule => Rule.required().length(1) }],
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Filter of categories',
      description:
        'A list of additional categories that will filter articles from the default category',
      type: 'array',
      of: [
        {
          name: 'category',
          type: 'reference',
          title: 'Filter category',
          to: { type: 'category' },
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'form2',
      type: 'object',
      title: 'Form 2',
      description: 'There are several forms to choose from',
      fields: [
        {
          name: 'isForm',
          type: 'boolean',
          title: 'Show form under the blog cards',
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
  ]
}

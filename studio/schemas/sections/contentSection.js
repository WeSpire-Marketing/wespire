export default {
  name: 'contentSection',
  title: 'Content section w. text and image cards',
  type: 'object',
  fields: [
    {
      name: 'rows',
      type: 'array',
      title: 'Show content with text rows and text rows with images',
      of: [{ type: 'rowWithoutLink' }, { type: 'textRow' }],
      validation: Rule => Rule.required()
    },
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
  ]
}

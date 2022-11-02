export default {
  name: 'heroQuote',
  type: 'object',
  title: 'Hero quote & sponsors section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Text under the title',
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
    },
    {
      name: 'sponsors',
      type: 'array',
      title: 'Partners and sponsors logos ticker',
      of: [
        {
          name: 'sponsor',
          type: 'object',
          title: 'Sponsor',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Sponsor name (used for alt attribute)',
              validation: Rule => Rule.required()
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(7)
    }
  ]
}

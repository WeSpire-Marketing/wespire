export default {
  name: 'authorsQuoteForm',
  type: 'object',
  title: 'Quote panel with authors',
  fields: [
    {
      name: 'authors',
      type: 'array',
      title: 'Quote panel with authors',
      of: [
        {
          name: 'author',
          type: 'object',
          title: 'Quote author',
          fields: [
            {
              name: 'quote',
              type: 'text',
              title: 'Quote',
              description:
                'Note: quotes longer than 6 lines will automatically be truncated with "..."',
              validation: Rule => Rule.required()
            },
            {
              name: 'image',
              type: 'image',
              title: 'Author image',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Image description',
                  validation: Rule => Rule.required()
                }
              ],
              validation: Rule => Rule.required()
            },
            {
              name: 'name',
              type: 'string',
              title: 'Author name',
              validation: Rule => Rule.required()
            },
            {
              name: 'job',
              type: 'string',
              title: 'Author position',
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required().max(3)
    }
  ],
  validation: Rule => Rule.required()
}

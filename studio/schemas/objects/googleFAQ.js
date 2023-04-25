export default {
  name: 'googleFAQ',
  title: 'Google FAQ list',
  type: 'object',
  fields: [
    {
      name: 'listFAQ',
      title: 'List of optional FAQ',
      type: 'array',
      of: [
        {
          name: 'cardFAQ',
          title: 'Card FAQ',
          type: 'object',
          preview: {
            select: {
              title: 'question'
            },
            prepare({ title }) {
              return {
                title
              }
            }
          },
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
              validation: Rule => Rule.required()
            },
            {
              name: 'answer',
              type: 'text',
              title: 'Answer',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}

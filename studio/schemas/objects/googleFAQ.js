import { OlistIcon, InfoOutlineIcon } from '@sanity/icons'

export default {
  name: 'googleFAQSection',
  title: 'Google FAQ list',
  type: 'object',
  initialValue: {
    showFAQ: 'false'
  },
  fields: [
    {
      name: 'showFAQ',
      type: 'boolean',
      title: 'Show the FAQ section?',
      description: 'By default: false.'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: 'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => Boolean(!parent?.showFAQ)
    },
    {
      name: 'listFAQ',
      title: 'List of optional FAQ',
      hidden: ({ parent }) => Boolean(!parent?.showFAQ),
      type: 'array',
      icon: OlistIcon,
      of: [
        {
          name: 'cardFAQ',
          title: 'Card FAQ',
          type: 'object',
          icon: InfoOutlineIcon,
          preview: {
            select: {
              title: 'question'
            },
            prepare({ title }) {
              return {
                title,
                media: InfoOutlineIcon
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

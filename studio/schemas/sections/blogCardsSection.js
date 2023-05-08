export default {
  name: 'blogCardsSection',
  title: 'Blog Cards Section',
  type: 'object',
  initialValue: {
    showSection: false
  },
  fields: [
    {
      name: 'showSection',
      type: 'boolean',
      title: 'Display Cards Section?',
      description: 'By default: false'
    },
    {
      name: 'blogsTitle',
      type: 'string',
      title: 'Title above blog cards',
      description:
        'Wrap the word in <span> to show/hide animated lines in the title. Example: <span>Easy</span>',
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => !Boolean(parent?.showSection)
    },
    {
      name: 'blogs',
      type: 'array',
      title: 'Blog cards',
      of: [
        {
          name: 'blog',
          title: 'Choose an article',
          type: 'reference',
          to: { type: 'article' },
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required().max(3),
      hidden: ({ parent }) => !Boolean(parent?.showSection)
    }
  ]
}

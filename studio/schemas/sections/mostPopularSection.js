export default {
  name: 'mostPopularSection',
  type: 'object',
  title: 'Most popular section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Text under section title',
      validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required().max(3),
    },
  ],
}

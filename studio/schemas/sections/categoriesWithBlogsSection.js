export default {
  name: 'categoriesWithBlogsSection',
  type: 'object',
  title: 'Categories and Blogs Section',
  fields: [
    {
      name: 'blogs',
      title: 'List of blogs',
      type: 'array',
      of: [
        {
          name: 'blog',
          title: 'Choose item to show',
          type: 'reference',
          to: { type: 'article' },
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required().max(27),
    },
  ],
}

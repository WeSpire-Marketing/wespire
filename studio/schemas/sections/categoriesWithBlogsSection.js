export default {
  name: 'categoriesWithBlogsSection',
  type: 'object',
  title: 'Categories and Blogs Section',
  fields: [
    {
      name: 'defaultCategory',
      title: 'Default category',
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
  ],
}

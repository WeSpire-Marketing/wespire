export default {
  name: 'quoteSection',
  title: 'Quote Section',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Author image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Author name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'job',
      title: 'Author job',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}

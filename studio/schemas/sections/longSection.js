export default {
  name: 'longSection',
  type: 'object',
  title: 'Long section with text and images',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rows',
      type: 'array',
      title: 'Text rows with images',
      of: [{ type: 'row' }],
      validation: (Rule) => Rule.required(),
    },
  ],
}

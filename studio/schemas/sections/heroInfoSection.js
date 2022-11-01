export default {
  name: 'heroInfoSection',
  title: 'Hero with Text',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section title',
      description:
        'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text under the title',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
}

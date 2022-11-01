export default {
  name: 'textCol',
  type: 'object',
  title: 'Text column',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Column title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'starsColor',
      title: 'Stars color',
      type: 'colorPicker',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'text',
      title: 'Column text',
      validation: (Rule) => Rule.required(),
    },
  ],
}

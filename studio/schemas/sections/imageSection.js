export default {
  name: 'imageSection',
  type: 'object',
  title: 'Image Section',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },
  ],
}

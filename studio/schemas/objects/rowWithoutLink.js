export default {
  name: 'rowWithoutLink',
  type: 'object',
  title: 'Row with image',
  fields: [
    {
      name: 'imageData',
      type: 'object',
      title: 'Image',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'imageAlt',
          type: 'string',
          title: 'Image description (alt)',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cardColor',
      title: 'Image card background-color',
      type: 'colorPicker',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Row title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text under the title',
      validation: (Rule) => Rule.required(),
    },
  ],
}

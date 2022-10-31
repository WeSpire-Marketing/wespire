export default {
  name: 'author',
  type: 'document',
  title: 'Authors',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Description',
          validation: (Rule) => Rule.required().min(1).max(50),
        },
      ],
    },
  ],
}

export default {
  name: 'awardsSection',
  type: 'object',
  title: 'Awards section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Image description (alt)',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text under the title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'awards',
      type: 'array',
      title: 'Awards',
      of: [
        {
          name: 'award',
          type: 'image',
          title: 'Award image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Award image description (alt)',
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}

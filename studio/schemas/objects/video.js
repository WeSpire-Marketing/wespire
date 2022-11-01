export default {
  type: 'object',
  name: 'videoId',
  title: 'Video ID',
  fields: [
    {
      type: 'string',
      name: 'url',
      title: 'Video URL',
      description: 'A URL to a vimeo or youtube video',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Video preview image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Video preview image description (alt)',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}

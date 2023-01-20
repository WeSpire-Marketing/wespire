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
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Video preview image',
      fields: [
        {
          name: 'playIcon',
          type: 'boolean',
          title: 'Need Play Icon?',
          description: 'Overlay the play icon on the cover?',
          initialValue: false,
          validation: Rule => Rule.required()
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Video preview image description (alt)',
          validation: Rule => Rule.required().error('Video preview image description is required')
        }
      ]
    }
  ]
}

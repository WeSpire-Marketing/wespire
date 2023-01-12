import { CommentIcon, PlayIcon, ArchiveIcon, BlockquoteIcon, ImageIcon } from '@sanity/icons'

export default {
  name: 'stories',
  type: 'document',
  title: 'Stories',
  icon: CommentIcon,
  fields: [
    {
      name: 'pageMeta',
      type: 'pageMeta',
      title: 'Add page meta',
      description: 'This fields are required and important for SEO'
    },
    {
      name: 'storyCard',
      type: 'object',
      title: 'Customer story card',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Story card image',
          description: 'To display this image correctly use a square image of at least 224x244 pixels',
          fields: [
            {
              name: 'alt',
              title: 'Image description (alt)',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
        },
        {
          name: 'cardColor',
          title: 'Image card background-color',
          type: 'colorPicker',
          validation: Rule => Rule.required()
        },
        {
          name: 'val1',
          type: 'string',
          title: 'Story card statistic value #1',
          validation: Rule => Rule.required()
        },
        {
          name: 'stat1',
          type: 'string',
          title: 'Story card statistic explanation #1',
          validation: Rule => Rule.required()
        },
        {
          name: 'val2',
          type: 'string',
          title: 'Story card statistic value #2',
          validation: Rule => Rule.required()
        },
        {
          name: 'stat2',
          type: 'string',
          title: 'Story card statistic explanation #2',
          validation: Rule => Rule.required()
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Story card slug',
          description: 'Only numbers, lowercase letters, and dashes.',
          validation: Rule => Rule.required()
        },
        {
          name: 'title',
          title: 'Story card title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'excerpt',
          type: 'text',
          title: 'Story card short description',
          validation: Rule => Rule.required().max(200)
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'storyContent',
      type: 'object',
      title: 'Customer story content',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Story title',
          validation: Rule => Rule.required()
        },
        {
          name: 'content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
                { title: 'Normal', value: 'normal' }
              ]
            },
            {
              type: 'image',
              icon: ImageIcon,
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Description',
                  validation: Rule => Rule.required()
                }
              ]
            },
            {
              title: 'Quote',
              value: 'quote',
              name: 'quote',
              type: 'object',
              icon: BlockquoteIcon,
              fields: [
                {
                  name: 'quoteText',
                  type: 'text',
                  title: 'Quote Text',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'quoteAuthor',
                  type: 'string',
                  title: 'Quote Author',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'quoteAuthorJob',
                  type: 'string',
                  title: 'Quote Author Position',
                  validation: Rule => Rule.required()
                }
              ]
            },
            {
              type: 'videoId',
              title: 'Video',
              icon: PlayIcon,
            },
            {
              type: 'file',
              title: 'File',
              icon: ArchiveIcon,
              fields: [
                {
                  name: 'buttonText',
                  type: 'string',
                  title: 'Download button text',
                  validation: Rule => Rule.required()
                }
              ]
            }
          ],
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    { name: 'sliderSection', type: 'sliderSection' },
    { name: 'ctaSection', type: 'ctaSection' }
  ]
}

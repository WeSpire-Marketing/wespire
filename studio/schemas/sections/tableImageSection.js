export default {
  name: 'tableImage',
  type: 'object',
  title: 'Table Image Section',
  fields: [
    {
      name: 'imageData',
      type: 'object',
      title: 'Image main',
      description: 'Recommended image size 600x375',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'imageAlt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      description: 'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text under the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageTable',
      type: 'object',
      title: 'Image table',
      description: 'Recommended image size 600x375',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'imageAlt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'imageTableMobile',
      type: 'object',
      title: 'Image table',
      description: 'Recommended image size 600x375',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'imageAlt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }
  ]
}

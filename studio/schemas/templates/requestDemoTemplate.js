export default {
  name: 'requestDemoTemplate',
  title: 'Request demo template',
  type: 'object',
  fields: [
    // {
    //   name: 'pageMeta',
    //   type: 'pageMeta',
    //   title: 'Add page meta',
    //   description: 'This fields are required and important for SEO',
    // },
    {
      name: 'hideDesktopNav',
      type: 'boolean',
      title: 'Hide desktop navigation',
      readOnly: true,
      initialValue: {
        hideDesktopNav: true
      }
      // validation: Rule => Rule.required()
    },
    {
      name: 'hideMobileNav',
      type: 'boolean',
      title: 'Hide mobile navigation',
      readOnly: true,
      initialValue: {
        hideMobileNav: true
      }
      // validation: Rule => Rule.required()
    },
    {
      name: 'link',
      type: 'object',
      title: 'Back to website link',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Link text',
          validation: Rule => Rule.required()
        },
        {
          name: 'url',
          type: 'string',
          title: 'Link url',
          validation: Rule => Rule.required()
        },
        {
          name: 'internal',
          type: 'boolean',
          title: 'External/internal link',
          description: 'By default all links are external and opens in new tab',
          validation: Rule => Rule.required()
        }
      ],
      initialValue: {
        internal: false
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
      description:
        'Wrap the word in <span> to show/hide animated star in the title. Example: <span>Easy</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Text under the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image under text',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Use only Hubspot form id',
      validation: Rule => Rule.required()
    }
  ]
}

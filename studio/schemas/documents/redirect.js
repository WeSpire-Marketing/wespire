export default {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'source',
      title: 'From',
      description: 'Valid link can be like: "/valid-link". Without domain',
      type: 'string',
      initialValue: '/'
    },
    {
      name: 'destination',
      title: 'To',
      description:
        'Internal link can be like: "/valid-internal-link"; external: "https://wespire.com"',
      type: 'string',
      initialValue: '/'
    },
    {
      name: 'permanent',
      title: 'Permanent',
      type: 'boolean',
      initialValue: () => true
    }
  ]
}

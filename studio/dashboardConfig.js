export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    // {
    //   name: 'project-info',
    //   options: {
    //     __experimental_before: [
    //       {
    //         name: 'netlify',
    //         options: {
    //           description:
    //             'NOTE: Now you can see the live changes on the site pages. In perspective these pages can be static. In this case pages need to be re-deployed to see the changes when documents are published.',
    //           sites: [
    //             {
    //               buildHookId: '635c47f3fbb8074a66f5006a',
    //               title: 'Wespire pages',
    //               name: 'wespire-pages-builder',
    //               apiId: 'dd94c1ac-87f6-47ab-8703-6ce883efd294'
    //             }
    //           ]
    //         }
    //       }
    //     ],
    //     data: [
    //       {
    //         title: 'GitHub repo',
    //         value: 'https://github.com/Halo-lab/',
    //         category: 'Code'
    //       },
    //       {
    //         title: 'Frontend',
    //         value: 'https://wespire-pages-builder.netlify.app/',
    //         category: 'apps'
    //       }
    //     ]
    //   }
    // },
    {
      name: 'document-list',
      options: {
        title: 'Recently edited pages',
        order: '_updatedAt desc',
        limit: 5,
        types: ['page']
      },
      layout: { width: 'medium' }
    },
    {
      name: 'document-list',
      options: {
        title: 'Recently edited articles',
        order: '_updatedAt desc',
        limit: 5,
        types: ['article']
      },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

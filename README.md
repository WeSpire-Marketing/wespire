# Wespire pages builder

_SEO friendly page builder in Next.js._

## What you have

- A dynamic frontend with [Next.js](https://nextjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Project structure
```
project
└───node_modules
│   lerna.json
│   README.md
│   package.json
|
└───studio
|   └───backups
|   └───config
|   └───lib
|   └───plugins
|   └───schemas
|   |   └───documents
|   |   └───helpers
|   |   └───objects
|   |   └───sections
|   |   └───templates
|   |
│   └───node_modules
│         package.json
│         sanity.json
|         .linters*
|         .ignorefiles*
│
└───web
    └───node_modules
    └───assets
    |   └───fonts
    |   └───images
    └───components
    |   |   index.js
    |   └───sections/templates
    └───pages
    └───public
    └───styles
    └───utils
        └───hooks
      .env*
      .linters*
      .ignorefiles*
      client.js
      next.config.js
      package.json
      package-lock.json
      postcss.config.js
      tailwind.config.js
```

## Environment variables in .env.example

NEXT_PUBLIC_DOMAIN

## Quick start

1. Clone from repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:3000](http://localhost:3000)
4. `npm run build` to build to production locally

## Additional info

Sometimes after the project is stopped there is still a work instance of the application in memory, so if you run any subsequent applications on the same ports, in the terminal you may see a warning that the localhost is already busy. To stop unnecessary processes of an application it is enough to run the command "taskkill /f /im node.exe" in the terminal.

## Deploy changes

Netlify automatically deploys new changes commited to client-master branch on their GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df1efe9de143c400ea5f453',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7ebmo78u',
                  apiId: 'd12111a2-74ae-4aef-a571-1e8b675805ec'
                },
                {
                  buildHookId: '5df1efe9a6bb7e9ae1fc455c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gjtamq8j',
                  apiId: '8b8c69ff-c0b7-4d78-9ab5-af09181f0c44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CaliCastle/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gjtamq8j.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

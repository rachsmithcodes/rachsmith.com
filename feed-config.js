module.exports = {
  resolve: `gatsby-plugin-feed-mdx`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map((edge) => {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.fields.excerpt,
              date: edge.node.frontmatter.added,
              url:
                site.siteMetadata.siteUrl + '/' + edge.node.fields.slug + '/',
              guid:
                site.siteMetadata.siteUrl + '/' + edge.node.fields.slug + '/',
              custom_elements: [{ 'content:encoded': edge.node.html }],
            });
          });
        },
        query: `
          {
            allMdx(
              sort: { order: DESC, fields: [frontmatter___added] },
            ) {
              edges {
                node {
                  html
                  fields { 
                    slug
                    excerpt
                  }
                  frontmatter {
                    title
                    added
                    updated
                    tags
                  }
                }
              }
            }
          }
        `,
        output: '/rss.xml',
        title: "Your Site's RSS Feed",
        // optional configuration to insert feed reference in pages:
        // if `string` is used, it will be used to create RegExp and then test if pathname of
        // current page satisfied this regular expression;
        // if not provided or `undefined`, all pages will have feed reference inserted
        match: '^/notes/',
      },
    ],
  },
};

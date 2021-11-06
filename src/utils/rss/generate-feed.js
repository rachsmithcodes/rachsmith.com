const cheerio = require(`cheerio`)
const tagsHelper = require(`@tryghost/helpers`).tags
const _ = require(`lodash`)

// const generateItem = function generateItem(siteUrl, post) {
//     const itemUrl = post.canonical_url || `${siteUrl}/${post.slug}/`
//     const html = post.html
//     const htmlContent = cheerio.load(html, { decodeEntities: false, xmlMode: true })
//     const item = {
//         title: post.title,
//         description: post.excerpt,
//         guid: post.id,
//         url: itemUrl,
//         date: post.published_at,
//         categories: _.map(tagsHelper(post, { visibility: `public`, fn: tag => tag }), `name`),
//         author: post.primary_author ? post.primary_author.name : null,
//         custom_elements: [],
//     }
//     let imageUrl

//     if (post.feature_image) {
//         imageUrl = post.feature_image

//         // Add a media content tag
//         item.custom_elements.push({
//             'media:content': {
//                 _attr: {
//                     url: imageUrl,
//                     medium: `image`,
//                 },
//             },
//         })

//         // Also add the image to the content, because not all readers support media:content
//         htmlContent(`p`).first().before(`<img src="` + imageUrl + `" />`)
//         htmlContent(`img`).attr(`alt`, post.title)
//     }

//     item.custom_elements.push({
//         'content:encoded': {
//             _cdata: htmlContent.html(),
//         },
//     })
//     return item
// }

// const generateRSSFeed = function generateRSSFeed(siteConfig) {
//     return {
//         serialize: ({ query: { allGhostPost } }) => allGhostPost.edges.map(edge => Object.assign({}, generateItem(siteConfig.siteUrl, edge.node))),
//         setup: ({ query: { allGhostSettings } }) => {
//             const siteTitle = allGhostSettings.edges[0].node.title || `No Title`
//             const siteDescription = allGhostSettings.edges[0].node.description || `No Description`
//             const feed = {
//                 title: siteTitle,
//                 description: siteDescription,
//                 // generator: `Ghost ` + data.safeVersion,
//                 generator: `Ghost 2.9`,
//                 feed_url: `${siteConfig.siteUrl}/rss/`,
//                 site_url: `${siteConfig.siteUrl}/`,
//                 image_url: `${siteConfig.siteUrl}/${siteConfig.siteIcon}`,
//                 ttl: `60`,
//                 custom_namespaces: {
//                     content: `http://purl.org/rss/1.0/modules/content/`,
//                     media: `http://search.yahoo.com/mrss/`,
//                 },
//             }
//             return {
//                 ...feed,
//             }
//         },
//         query: `
//         {
//             allGhostPost(
//                 sort: {order: DESC, fields: published_at}
//             ) {
//                 edges {
//                     node {
//                         # Main fields
//                         id
//                         title
//                         slug
//                         featured
//                         feature_image

//                         # Dates unformatted
//                         created_at
//                         published_at
//                         updated_at

//                         # SEO
//                         excerpt
//                         meta_title
//                         meta_description

//                         # Authors
//                         authors {
//                             name
//                         }
//                         primary_author {
//                             name
//                         }
//                         tags {
//                             name
//                             visibility
//                         }

//                         # Content
//                         html

//                         # Additional fields
//                         url
//                         canonical_url
//                     }
//                 }
//             }
//         }
//   `,
//         output: `/rss`,
//     }
// }

const generateRSSFeed = function generateRSSFeed(siteConfig) {
  return {
    serialize: ({ query: { site, allMdx } }) => {
      return allMdx.edges.map((edge) => {
        return Object.assign({}, edge.node.frontmatter, {
          description: edge.node.fields.excerpt,
          date: edge.node.frontmatter.added,
          url: site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
          guid: site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
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
  }
}


module.exports = generateRSSFeed

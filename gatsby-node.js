const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     // console.log("@@@@@@@", slug)
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }
// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const res = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   res.data.allMarkdownRemark.edges.forEach(edge => {
//     if (edge.node.fields.slug === "react") {
//       const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
//       createPage({
//         path: `/blog/${edge.node.fields.slug}`,
//         component: blogPostTemplate,
//         context: {
//           slug: edge.node.fields.slug,
//         },
//       })
//     } else {
//       const gatsbyTutTemplate = path.resolve(`./src/templates/gatsbyTut.js`)
//       createPage({
//         path: `/blog/${edge.node.fields.slug}`,
//         component: gatsbyTutTemplate,
//         context: {
//           slug: edge.node.fields.slug,
//         },
//       })
//     }
//   })
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query {
      allContentfulGatsbyReactBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulGatsbyReactBlog.edges.forEach(edge => {
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

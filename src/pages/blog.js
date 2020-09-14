import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import blogStyle from "../styles/blog.module.scss"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <h1>This is a blog page</h1>
      <div>
        {data.allMarkdownRemark.edges.map(n => (
          <div className={blogStyle.post} key={n.node.frontmatter.title}>
            <Link to={`/blog/${n.node.fields.slug}`}>
              <h1>{n.node.frontmatter.title}</h1>
            </Link>
            <p>{n.node.frontmatter.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BlogPage

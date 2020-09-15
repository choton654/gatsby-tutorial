import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../components/head"
import blogStyle from "../styles/blog.module.scss"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGatsbyReactBlog(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            slug
            createdAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <Head title="Blog" />
      <h1>This is a blog page</h1>
      <div>
        {data.allContentfulGatsbyReactBlog.edges.map(n => (
          <div className={blogStyle.post} key={n.node.slug}>
            <Link to={`/blog/${n.node.slug}`}>
              <h1>{n.node.title}</h1>
            </Link>
            <p>{n.node.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BlogPage

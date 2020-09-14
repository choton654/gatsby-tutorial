import { graphql, Link } from "gatsby"
import React from "react"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const Gatsbytut = props => {
  return (
    <div>
      <h1>Learn more about gatsby</h1>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
      <Link to="https://www.gatsbyjs.com/docs/">Learn gatsby</Link>
    </div>
  )
}
export default Gatsbytut

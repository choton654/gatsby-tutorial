import { graphql, useStaticQuery } from "gatsby"
import React from "react"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>created by {data.site.siteMetadata.author} 2020 </p>
    </footer>
  )
}

export default Footer

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import React from "react"
import Head from "../components/head"

// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `
export const query = graphql`
  query($slug: String!) {
    contentfulGatsbyReactBlog(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM Do, YYYY")
      description {
        json
      }
    }
  }
`

function Blog(props) {
  const options = {
    renderNode: {
      hyperlink: node => {
        // console.log(node)
        const src = node.data.uri
        return <img src={src} ait="grass" />
      },
      "embedded-asset-block": node => {
        console.log(node.data.target.fields)
        const alt = node.data.target.fields.title["en-Us"]
        // const src = node.data.target.fields.file["en-Us"].url
        return (
          <img
            src="//images.ctfassets.net/tznwotbosx83/4F2MY0GQTeyzsczdgwbrfq/118d836614fd688790a6b05755e70f3d/3-d-706a.jpg"
            alt={alt}
          />
        )
      },
    },
  }

  return (
    <div>
      <Head title={props.data.contentfulGatsbyReactBlog.title} />
      <h1>{props.data.contentfulGatsbyReactBlog.title}</h1>
      <p>{props.data.contentfulGatsbyReactBlog.createdAt}</p>
      <div>
        {documentToReactComponents(
          props.data.contentfulGatsbyReactBlog.description.json,
          options
        )}
      </div>
    </div>
  )
}

export default Blog

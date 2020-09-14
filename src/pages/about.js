import { Link } from "gatsby"
import React from "react"
const AboutPage = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <Link to="https://www.instagram.com/?hl=en" target="_blank">
        About me
      </Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  )
}

export default AboutPage

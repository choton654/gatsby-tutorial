import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
const AboutPage = () => {
  return (
    <div>
      <Head title="About" />
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

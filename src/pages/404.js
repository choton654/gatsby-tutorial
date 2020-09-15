import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"

function PagenotFound() {
  return (
    <div>
      <Head title="Error" />
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}

export default PagenotFound

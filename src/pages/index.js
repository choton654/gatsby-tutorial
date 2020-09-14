import { Link, navigate } from "gatsby"
import React from "react"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2
        onClick={() => {
          navigate(`/contact?data=${{ hello: "world" }}`)
        }}
      >
        {" "}
        This is a gatsby tutorial course{" "}
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
      <Link to="/about">About us</Link>
    </div>
  )
}

export default IndexPage

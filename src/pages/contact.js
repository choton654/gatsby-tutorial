import { Link } from "gatsby"
import React from "react"
const ContactPage = props => {
  console.log("location data", props.location.search)
  return (
    <div>
      <h1>This is a contact page</h1>
      <Link to="https://www.facebook.com/" target="_blank">
        Contact me
      </Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  )
}

export default ContactPage

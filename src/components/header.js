import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import headerStyle from "../styles/header.module.scss"
function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <h1>
        <Link to="/" className={headerStyle.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav className={headerStyle.navbar}>
        <ul className={headerStyle.navlist}>
          <li>
            <Link
              className={headerStyle.navitem}
              activeClassName={headerStyle.activeLink}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navitem}
              activeClassName={headerStyle.activeLink}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navitem}
              activeClassName={headerStyle.activeLink}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navitem}
              activeClassName={headerStyle.activeLink}
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

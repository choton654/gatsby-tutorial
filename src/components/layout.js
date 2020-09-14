import React from "react"
import "../styles/index.scss"
import layoutStyle from "../styles/layout.module.scss"
import Footer from "./footer"
import Header from "./header"

function layout({ children }) {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default layout

const express = require("express")
const gatsby = require("gatsby-plugin-nodejs")
const path = require("path")
const app = express()

gatsby.prepare({ app }, () => {
  app.get("/", (req, res) => {
    res.send("hello")
  })
})

const port = process.env.PORT || 1337

app.listen(port, err => {
  if (err) {
    console.log(err)
  }
  console.log(`listening on port ${port}`)
})

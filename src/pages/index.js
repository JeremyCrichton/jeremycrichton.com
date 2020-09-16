import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Home from "../components/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage

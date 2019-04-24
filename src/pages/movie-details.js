import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Movies from "../components/movies"

const SecondPage = ({ location }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>{ location.state.title }</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage;
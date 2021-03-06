import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Movies from "../components/movies"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/page-3/">Go to Page 3</Link>
    <Link to="/">Go back to the homepage</Link>
    <Movies />
  </Layout>
)

export default SecondPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/list"

const items = [
    {
        title: 'Hello world1',
        text: 'Something importanty'
    },
    {
        title: 'Hello world2',
        text: 'Something importanty'
    },
    {
        title: 'Hello world3',
        text: 'Something importanty'
    },
];

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <List items={items} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage

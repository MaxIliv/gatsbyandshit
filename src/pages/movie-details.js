import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MovieImage from "../components/movieImg"

const SecondPage = ({ location }) => {
  const { data } = location.state;
  const { 
    title,
    overview,
    poster_path
  } = data;

  return (<Layout>
    <SEO title={title} />
    <h1>{ title }</h1>
    <p>{ overview }</p>
    <MovieImage path={poster_path} />
    <Link to="/page-2/">Back to List</Link>
  </Layout>
)
}

export default SecondPage;

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MovieImage from "./movieImg"


const Movie = props => {
    const {
        title,
        overview,
        poster_path
    } = props;

    return (
        <div>
            <Link to='/movie-details/' state={{ data: props }}>{ title }</Link>
            <p>{ overview }</p>
            <MovieImage path={poster_path} />
        </div>
    );
};

export default Movie;

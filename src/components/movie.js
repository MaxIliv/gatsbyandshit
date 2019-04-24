import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Movie = ({
    title,
    overview,
    id,
    poster_path,
    vote_average
}) => (
    <div>
        <Link to='/movie-details/' state={{ title }}>{ title }</Link>
        <p>{ overview }</p>
        <img style={{ maxWidth: '100%', }} src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + poster_path} />
    </div>
);

export default Movie;

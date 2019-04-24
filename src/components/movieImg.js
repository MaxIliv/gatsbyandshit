import React from "react"


const MovieImage = ({ path }) => (
    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${path}`} />
);

export default MovieImage;

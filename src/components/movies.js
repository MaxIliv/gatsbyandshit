import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Movie from "./movie"

class Movies extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ea0a47ec30918dba0ece15e8d28dc19b')
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }

    render() {
        const { data } = this.state;

        if (!data ) {    
            return (
                <p>Loading ...</p>
            )
        }

        console.log(data);


        const { results } = data;

        if (!results) {
            return (
                <p>No data for this request :(</p>
            )
        }


        return (
            results.map(res => <Movie key={res.id} { ...res } />)
        )
    }
};

export default Movies;

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NewsItem = ({ title, text }) => (
    <div>
        <h3>{ title }</h3>
        <p>{ text }</p>
    </div>
);

export default NewsItem;
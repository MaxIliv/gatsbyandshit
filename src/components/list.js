import PropTypes from "prop-types"
import React from "react"
import NewsItem from './newsItem';

const List = ({ items }) => (
  <div>
    { items.map(({ title, text }) => <NewsItem key={title} title={title} text={text} />) }
  </div>
)

List.propTypes = {
  siteTitle: PropTypes.string,
}

List.defaultProps = {
  siteTitle: ``,
}

export default List;

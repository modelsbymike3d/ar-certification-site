import { Link } from "gatsby-plugin-intl"
import React from "react"
import PropTypes from "prop-types"

const TrackCard = ({ software, platform, description, link }) => (
  <div className="rounded shadow border-solid border-4 border-green-700">
    <h1>{software}</h1>
    <h2>{platform}</h2>
    <p>{description}</p>
    <Link to={link}>{`Start course!`}</Link>
  </div>
)

TrackCard.propTypes = {
  software: PropTypes.string,
  platform: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
}

TrackCard.defaultProps = {
  software: ``,
  platform: ``,
  description: ``,
  link: `/`,
}

export default TrackCard

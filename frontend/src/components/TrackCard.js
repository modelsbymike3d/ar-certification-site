import { Link } from "gatsby-plugin-intl"
import React from "react"
import PropTypes from "prop-types"

const TrackCard = ({ software, platform, description, link }) => (
  <div className="neu-border">
    <div className="m-4">
      <h1 className="font-bold text-green-700 text-3xl text-neu">{software}</h1>
      <h2 className="text-xl text-neu">{platform}</h2>
      <p>{description}</p>
      <Link to={link}>{`Start track!`}</Link>
    </div>
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

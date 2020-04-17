import { Link } from "gatsby-plugin-intl"
import React from "react"
import PropTypes from "prop-types"

const TrackCard = ({ software, platform, description, link, image }) => (
  <div className="neu-border">
    <div className=" flex flex-row items-center bg-green-700">
      <div className="relative h-full p-2">
        <div className="bg-white rounded-full">
          <img
            className="w-24 rounded-full border-0 border-solid border-green-700"
            src={image}
            alt={`${software} logo`}
          />
        </div>
      </div>
      <div className="pl-4 bg-gray-100">
        <div>
          <h1 className="font-bold text-green-700 text-3xl text-neu">
            {software}
          </h1>
          <h2 className="mt-0 font-bold text-black text-xl text-neu">
            {platform}
          </h2>
          <p>{description}</p>
          <Link to={link}>{`Start track!`}</Link>
        </div>
      </div>
    </div>
  </div>
)

TrackCard.propTypes = {
  software: PropTypes.string,
  platform: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
}

TrackCard.defaultProps = {
  software: ``,
  platform: ``,
  description: ``,
  link: `/`,
  image: "",
}

export default TrackCard

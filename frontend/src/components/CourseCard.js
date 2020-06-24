import { Link } from "gatsby-plugin-intl"
import React from "react"
import PropTypes from "prop-types"

const CourseCard = ({ title, description, link, image, difficulty }) => (
  <div className=" max-w-sm rounded overflow-hidden mx-auto my-4 shadow-lg">
    <img className="w-full" src={image} />
    <div className="relative mx-2 p-1 ">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-sm">{description}</p>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{difficulty}</span>
      <div>
        <Link to={link} className="">
          Begin course
        </Link>
      </div>
    </div>
  </div>
)

CourseCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  difficulty: PropTypes.string,
}

CourseCard.defaultProps = {
  title: ``,
  description: ``,
  link: `/`,
  image: "",
  difficulty: ``,
}

export default CourseCard

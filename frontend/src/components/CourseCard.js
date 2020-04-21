import { Link } from "gatsby-plugin-intl"
import React from "react"
import PropTypes from "prop-types"

const CourseCard = ({ title, description, link, image, difficulty }) => (
  <div className=" max-w-sm h-56 mx-auto my-4">
    <div
      className="bg-grey-100 max-w-sm h-56 neu-border"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-20"></div>
      <div className="relative mx-2 p-1 bg-black opacity-75 text-white shadow-xl">
        <h1 className="text-2xl underline">{title}</h1>
        <p className="text-sm">{description}</p>
        <div className="absolute top-0 right-0 mx-1 text-xs">{difficulty}</div>
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

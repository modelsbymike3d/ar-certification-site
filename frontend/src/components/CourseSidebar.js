import React from "react"
import PropTypes from "prop-types"

const CourseSidebar = ({ links }) => (
  <div>
    {links.map((link, index) => (
      <div key={index}>
        <a href={link.link}>{link.title}</a>
      </div>
    ))}
  </div>
)

CourseSidebar.propTypes = {
  links: PropTypes.array,
}

CourseSidebar.defaultProps = {
  links: [],
}

export default CourseSidebar

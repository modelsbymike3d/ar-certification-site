import { FormattedMessage, Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Language from "./language"

const Header = ({ siteTitle, currentLang }) => (
  <header className="bg-green-700 text-white p-4 neu-border">
    <div className="flex flex-row justify-between items-center">
      <h1>
        <Link to="/" className="text-xl">
          <FormattedMessage id="header.title" />
        </Link>
      </h1>
      <div className="flex flex-row justify-around">
        <Language currentLang={currentLang} className="mx-4" />
        {[
          {
            path: "/tracks",
            text: "header.tracks",
          },
          {
            path: "/account",
            text: "header.account",
          },
        ].map((link, index) => (
          <Link to={link.path} key={index} className="mx-4">
            <FormattedMessage id={link.text} />
          </Link>
        ))}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  currentLang: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  currentLang: `en`,
}

export default Header

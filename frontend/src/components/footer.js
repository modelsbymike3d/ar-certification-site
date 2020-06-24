import { FormattedMessage, Link } from "gatsby-plugin-intl"
import React from "react"

const Footer = () => (
  <footer className="w-full bg-green-700 text-white p-4 shadow-lg fixed bottom-0">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    <FormattedMessage id="title" />
  </footer>
)

export default Footer

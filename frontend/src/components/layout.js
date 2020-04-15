/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import '../css/style.css';

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, intl }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
    <div className="flex flex-col min-h-screen">
      <Header currentLang={intl.locale} siteTitle={intl.formatMessage({ id: "header.title" })} />
      <div>
        <main>{children}</main>
        
      </div>
      <Footer />
      </div>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)

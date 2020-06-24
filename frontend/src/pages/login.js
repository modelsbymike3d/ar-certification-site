import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO
          lang={this.props.intl.locale}
          title={this.props.intl.formatMessage({ id: "title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <div>Login page</div>
        <div>Another thing</div>
      </Layout>
    )
  }
}

export default injectIntl(Login)

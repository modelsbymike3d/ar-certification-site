import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TracksPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className="m-8">
        Lens Studio
      </div>
    </Layout>
  )
}

export default TracksPage

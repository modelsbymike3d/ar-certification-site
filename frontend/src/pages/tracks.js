import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TrackCard from "../components/TrackCard";

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
        <TrackCard 
            software={intl.formatMessage({ id: "track.lensstudio.software"})} 
            platform={intl.formatMessage({ id: "track.lensstudio.platform"})} 
            description={intl.formatMessage({ id: "track.lensstudio.description"})}
            link={"/lensstudio"}
        />

      </div>
    </Layout>
  )
}

export default TracksPage

import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import CourseSidebar from "../../../components/CourseSidebar"

const IndexPage = () => {
  const intl = useIntl()
  const links = [
    {
      link: "#",
      title: "What is AR?",
    },
    {
      link: "#",
      title: "Downloading LS",
    },
  ]
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className="flex">
        <div className="h-full sticky top-0">
          <CourseSidebar links={links} />
        </div>
        <div>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
          <p>something cool</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

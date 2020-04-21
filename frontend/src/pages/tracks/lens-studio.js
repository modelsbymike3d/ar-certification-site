import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import CourseCard from "../../components/CourseCard"

const TracksPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className="mt-8 mx-2 flex flex-col justify-between">
        {[
          {
            title: "Face Effects",
            description:
              "Learn how to use retouch, liquify, distort, and face images to create fun face effects!",
            link: "/",
            image: "../../images/en/lensstudio/mountain.jpg",
            difficulty: "Beginner",
          },
          {
            title: "Face Effects",
            description:
              "Learn how to use retouch, liquify, distort, and face images to create fun face effects!",
            link: "/",
            image: "../../images/en/lensstudio/mountain.jpg",
            difficulty: "Beginner",
          },
          {
            title: "Face Effects",
            description:
              "Learn how to use retouch, liquify, distort, and face images to create fun face effects!",
            link: "/",
            image: "../../images/en/lensstudio/mountain.jpg",
            difficulty: "Beginner",
          },
        ].map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </Layout>
  )
}

export default TracksPage

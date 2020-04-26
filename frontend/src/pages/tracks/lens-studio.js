import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import CourseCard from "../../components/CourseCard"

const LensStudio = () => {
  const intl = useIntl()
  const basePath = `/tracks/lensstudio`
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
            title: "Getting Started",
            description:
              "Get started by downloading and installing Lens Studio.",
            link: `${basePath}/getting-started`,
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

export default LensStudio

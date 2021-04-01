import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import TechBanner from "../components/Services/Banner"
import Tools from "../components/Services/Tools"
import Partner from "../components/Services/Partner"

const TechPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "services/seo.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            keywords
          }
        }
      }
    }
  `);

  const seoData = data.file.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <TechBanner />
      <Tools />
      <Partner />
    </Fragment>
  )
}

export default TechPage

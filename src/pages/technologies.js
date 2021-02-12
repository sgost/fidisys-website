import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import TechBanner from "../components/Technologies/Banner"
import Tools from "../components/Technologies/Tools"
import Partner from "../components/Technologies/Partner"

const TechPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "technologies/seo.md"}) {
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

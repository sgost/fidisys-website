import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import WorksList from "../components/Works/WorksList"
import DribbbleSection from "../components/Dribbble"

const WorksPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "seoWorks.md"}) {
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
      <WorksList />
      <DribbbleSection />
    </Fragment>
  )
}

export default WorksPage

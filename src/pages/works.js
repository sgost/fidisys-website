import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Router } from "@reach/router"

import SEO from "../components/seo"
import WorksList from "../components/Works/WorksList"
import DribbbleSection from "../components/Dribbble"

const WorksPage = ({ location }) => {

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
      <Router>
        <WorksList path="/works" filter={location.hash} />
        <WorksList path="/works/:id" filter={location.hash} />
      </Router>
      <DribbbleSection />
    </Fragment>
  )
}

export default WorksPage

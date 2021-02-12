import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/Home/Banner"
import Services from "../components/Home/Services"
import Clients from "../components/Home/Clients"
import Works from "../components/Home/Works"
import Testimonials from "../components/Testimonials"
import Articles from "../components/Home/Articles"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home/seo.md"}) {
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
      <Banner />
      <Services />
      <Clients />
      <Works />
      <Testimonials />
      <Articles />
    </Fragment>
  )
}

export default IndexPage

import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import AboutBanner from "../components/About/Banner"
import Highlights from "../components/About/Highlights"
import Fidishow from "../components/About/Fidishow"
import Activities from "../components/About/Activities"
import Family from "../components/About/Family"
import Testimonials from "../components/Testimonials"

const AboutPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "about/seo.md"}) {
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
      <AboutBanner />
      <Highlights />
      <Fidishow />
      <Activities />
      <Family />
      <Testimonials />
    </Fragment>
  )
}

export default AboutPage

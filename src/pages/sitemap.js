import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Sitemap from "../components/Sitemap"

const SitemapPage = () => {

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
      <Sitemap />
    </Fragment>
  )
}

export default SitemapPage

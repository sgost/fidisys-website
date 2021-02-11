import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  SectionContainer,
  BannerTitle,
  LayoutContainer,
  BannerBg
} from "./styles"

export const TechBannerSection = ({ description, image, preview }) => {
  return (
    <SectionContainer>
      <BannerTitle>{description}</BannerTitle>
      <LayoutContainer>
        {
          preview ? <BannerBg image={image}></BannerBg> :
          <Fragment>
            {
              (image.extension === 'svg' && image.childImageSharp === null) ? <BannerBg image={image.publicURL}></BannerBg> : <BannerBg image={image.childImageSharp.fluid.originalImg}></BannerBg>
            }
          </Fragment>
        }
      </LayoutContainer>
    </SectionContainer>
  )
}

const TechBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "technologies/banner.md" }) {
        childMarkdownRemark {
          frontmatter {
            description
            image {
              childImageSharp {
                fluid {
                  originalImg
                }
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      {data.file && (
        <TechBannerSection
          description={data.file.childMarkdownRemark.frontmatter.description}
          image={
            data.file.childMarkdownRemark.frontmatter.image
          }
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default TechBanner

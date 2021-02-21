import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "antd"
import RightArrow from "../../images/arrow_right.png"
import {
  SectionContainer,
  IntouchContainer,
  IntouchSummary
} from "./styles"

export const FooterSection = ({ title, image, preview }) => {
  return (
    <SectionContainer>
      <IntouchContainer>
        <IntouchSummary>
          <p className="intouch-msg">{title}</p>
          {
            preview ? <img className="idea-img" src={image} alt={title} /> :
            <Fragment>
              {
                (image.extension === 'svg' && image.childImageSharp === null) ? <img className="idea-img" src={image.publicURL} alt={title} /> : <img className="idea-img" src={image.childImageSharp.fluid.src} alt={title} />
              }
            </Fragment>
          }
          <Button type="primary">
            Get in Touch
            <span className="arrow">
              <img src={RightArrow} alt="arrow" />
            </span>
          </Button>
        </IntouchSummary>
      </IntouchContainer>
    </SectionContainer>
  )
}

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "footer.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid {
                  src
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
        <FooterSection
          title={data.file.childMarkdownRemark.frontmatter.title}
          image={data.file.childMarkdownRemark.frontmatter.image}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Footer

import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"
import {
  SectionContainer,
  AboutInfo,
  ContentCont
} from "./styles"

export const PartnerSection = ({ helpText, image, html, preview }) => {
  return (
    <SectionContainer id="partnership">
      <Row className="rowCont">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <AboutInfo>
            <h3>{helpText}</h3>
            {
              preview ? <span><img src={image} alt="logo" /></span> :
              <span>
                {
                  (image.extension === 'svg' && image.childImageSharp === null) ? <img src={image.publicURL} alt="logo" /> : <img src={image.childImageSharp.fluid.src} alt="logo" />
                }
              </span>
            }
          </AboutInfo>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {
            preview ? <ContentCont>{html}</ContentCont> : <ContentCont dangerouslySetInnerHTML={{ __html: html }} />
          }
        </Col>
      </Row>
      <span className="leftWhiteSq"></span>
      <span className="leftYellowRect"></span>
      <span className="leftBlueCir"></span>
      <span className="leftRedSq"></span>
      <span className="rightWhiteSq"></span>
      <span className="rightRedCir"></span>
    </SectionContainer>
  )
}

const Partner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "services/partner.md" }) {
        childMarkdownRemark {
          frontmatter {
            helpText
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
          html
        }
      }
    }
  `)

  return (
    <Fragment>
      {data.file && (
        <PartnerSection
          helpText={data.file.childMarkdownRemark.frontmatter.helpText}
          image={data.file.childMarkdownRemark.frontmatter.image}
          html={data.file.childMarkdownRemark.html}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Partner

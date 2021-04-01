import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"
import LinkedinLogo from "../../../images/logos_linkedin.png"
import {
  SectionContainer,
  ContentSection,
  ImageSec,
  WorksList
} from "./styles"

export const ActivitiesSection = ({ activities, preview }) => {
  return (
    <Fragment>
      {
        activities && activities.map(activity =>
          <SectionContainer key={activity.id} id={activity.navId}>
            <WorksList>
              <Row className="workRow">
                <Col xs={24} sm={24} md={13} lg={13} xl={13}>
                  <ContentSection className="contentSec">
                    <h2>{activity.title}</h2>
                    <p className="description">{activity.description}</p>
                    <a className="viewLink" href={activity.link} target="_blank" without="true" rel="noopener noreferrer">
                      View on
                      <span>
                        <img src={LinkedinLogo} alt="linkedin" />
                      </span>
                    </a>
                  </ContentSection>
                </Col>
                <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                  <ImageSec>
                    {
                      preview ? <span><img src={activity.image} alt={activity.title} /></span> :
                      <span>
                        {
                          (activity.image.extension === 'svg' && activity.image.childImageSharp === null) ? <img src={activity.image.publicURL} alt={activity.title} /> : <img src={activity.image.childImageSharp.fluid.src} alt={activity.title} />
                        }
                      </span>
                    }
                  </ImageSec>
                </Col>
              </Row>
            </WorksList>
          </SectionContainer>
        )
      }
    </Fragment>
  )
}

const Activities = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about/activities.md" }) {
        childMarkdownRemark {
          frontmatter {
            activities {
              id
              title
              description
              navId
              link
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
    }
  `)

  return (
    <Fragment>
      {data.file && (
        <ActivitiesSection
          activities={data.file.childMarkdownRemark.frontmatter.activities}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Activities

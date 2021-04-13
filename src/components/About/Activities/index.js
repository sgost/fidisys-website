import React, { Fragment, useRef } from "react"
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

  //button position aware effect
  const btnRef = useRef([]);
  btnRef.current = [];

  const hoverBtn = (e, i) => {
    if(btnRef.current.length > 0) {
      var relX = e.clientX - btnRef.current[i].getBoundingClientRect().left;
      var relY = e.clientY - btnRef.current[i].getBoundingClientRect().top;
      btnRef.current[i].children[0].style.top = relY + 'px';
      btnRef.current[i].children[0].style.left = relX + 'px';
    }
  };

  const leaveBtn = (e, i) => {
    if(btnRef.current.length > 0) {
      var relX = e.clientX - btnRef.current[i].getBoundingClientRect().left;
      var relY = e.clientY - btnRef.current[i].getBoundingClientRect().top;
      btnRef.current[i].children[0].style.top = relY + 'px';
      btnRef.current[i].children[0].style.left = relX + 'px';
    }
  };

  return (
    <Fragment>
      {
        activities && activities.map((activity, i) =>
          <SectionContainer key={activity.id} id={activity.navId}>
            <WorksList>
              <Row className="workRow">
                <Col xs={24} sm={24} md={13} lg={13} xl={13}>
                  <ContentSection className="contentSec">
                    <h2>{activity.title}</h2>
                    <p className="description">{activity.description}</p>
                    <a className="viewLink" href={activity.link} target="_blank" without="true" rel="noopener noreferrer">
                      <span role="presentation" className="btnCont" onMouseEnter={(e) => hoverBtn(e, i)} onMouseLeave={(e) => leaveBtn(e, i)}  ref={(el) => btnRef.current[i] = el}>
                        <span className="btn-bg"></span>
                        View on
                        <span className="icon">
                          <img src={LinkedinLogo} alt="linkedin" />
                        </span>
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

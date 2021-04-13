import React, { Fragment, useRef } from "react"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Row, Col, Button } from "antd"
import RightArrow from "../../../images/arrow_right.png"
import ArrowRight from "../../../images/arrow_right_blue.png"
import {
  SectionContainer,
  SectionHeader,
  ContentSection,
  WorksList,
  ImageSec,
  AllworksBtn
} from "./styles"

export const WorksSection = ({ title, works, preview }) => {

  const goToWorks = () => {
    navigate('/works/');
  };

  //button position aware effect
  const btnRef = useRef(null);

  const hoverBtn = (e) => {
    if(btnRef !== null) {
      var relX = e.clientX - btnRef.current.getBoundingClientRect().left;
      var relY = e.clientY - btnRef.current.getBoundingClientRect().top;
      btnRef.current.children[0].style.top = relY + 'px';
      btnRef.current.children[0].style.left = relX + 'px';
    }
  };

  const leaveBtn = (e, i) => {
    if(btnRef !== null) {
      var relX = e.clientX - btnRef.current.getBoundingClientRect().left;
      var relY = e.clientY - btnRef.current.getBoundingClientRect().top;
      btnRef.current.children[0].style.top = relY + 'px';
      btnRef.current.children[0].style.left = relX + 'px';
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>
        <h2>{title}</h2>
      </SectionHeader>
      <WorksList>
        {
          works && works.map(work =>
            <Row key={work.id} className="workRow">
              <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                <ImageSec>
                  {
                    preview ? <span><img src={work.image} alt={work.title} /></span> :
                    <span>
                      {
                        (work.image.extension === 'svg' && work.image.childImageSharp === null) ? <img src={work.image.publicURL} alt={work.title} /> : <img src={work.image.childImageSharp.fluid.src} alt={work.title} />
                      }
                    </span>
                  }
                </ImageSec>
              </Col>
              <Col xs={24} sm={24} md={13} lg={13} xl={13}>
                <ContentSection className="contentSec">
                  <h2>{work.title}</h2>
                  <p className="description">{work.description}</p>
                  <a className="viewLink" href={work.link} target="_blank" without="true" rel="noopener noreferrer">
                    {
                      work.type === 'casestudy' && <span className="text">View Casestudy</span>
                    }
                    {
                      work.type === 'website' && <span className="text">View Website</span>
                    }
                    <span className="arrow">
                      <img src={ArrowRight} alt="arrow" />
                    </span>
                  </a>
                  <AllworksBtn className="mobView">
                    <Button type="primary" onClick={goToWorks}>
                      <span role="presentation" className="btnCont" onMouseEnter={hoverBtn} onMouseLeave={leaveBtn} ref={btnRef}>
                        <span className="btn-bg"></span>
                        Browse all our works
                        <span className="arrow">
                          <img src={RightArrow} alt="arrow" />
                        </span>
                      </span>
                    </Button>
                  </AllworksBtn>
                </ContentSection>
              </Col>
            </Row>
          )
        }
      </WorksList>
      <AllworksBtn>
        <Button type="primary" onClick={goToWorks}>
          <span role="presentation" className="btnCont" onMouseEnter={hoverBtn} onMouseLeave={leaveBtn} ref={btnRef}>
            <span className="btn-bg"></span>
            Browse all our works
            <span className="arrow">
              <img src={RightArrow} alt="arrow" />
            </span>
          </span>
        </Button>
      </AllworksBtn>
    </SectionContainer>
  )
}

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/works.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            works {
              id
              title
              description
              type
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
        <WorksSection
          title={data.file.childMarkdownRemark.frontmatter.title}
          works={data.file.childMarkdownRemark.frontmatter.works}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Works

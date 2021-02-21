import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"
import {
  SectionContainer,
  SectionHeader,
  ToolsListItem
} from "./styles"

export const ToolsSection = ({ title, technologies, preview }) => {
  return (
    <SectionContainer>
      <div>
        {
          technologies && technologies.map(tech =>
            <div>
              <SectionHeader>
                <h2>{tech.title}</h2>
                <p>{tech.description}</p>
              </SectionHeader>
              <Row className="toolsList">
                {
                  tech.tools && tech.tools.map(tool =>
                    <Col key={tool.title} xs={8} sm={8} md={4} lg={4} xl={4}>
                      <ToolsListItem>
                        {
                          preview ? <span><img src={tool.image} alt={tool.title} /></span> :
                          <span>
                            {
                              (tool.image.extension === 'svg' && tool.image.childImageSharp === null) ? <img src={tool.image.publicURL} alt={tool.title} /> : <img src={tool.image.childImageSharp.fluid.src} alt={tool.title} />
                            }
                          </span>
                        }
                        <h3>{tool.title}</h3>
                      </ToolsListItem>
                    </Col>
                  )
                }
              </Row>
            </div>
          )
        }
      </div>
    </SectionContainer>
  )
}

const Tools = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "technologies/tools.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            technologies {
              title
              description
              tools {
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
      }
    }
  `)

  return (
    <Fragment>
      {data.file && (
        <ToolsSection
          title={data.file.childMarkdownRemark.frontmatter.title}
          technologies={data.file.childMarkdownRemark.frontmatter.technologies}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Tools

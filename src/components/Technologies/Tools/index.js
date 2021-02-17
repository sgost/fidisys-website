import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"
import {
  SectionContainer,
  SectionHeader,
  ToolsListItem
} from "./styles"

export const ToolsSection = ({ title, tools, preview }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <h2>{title}</h2>
      </SectionHeader>
      <Row className="toolsList">
        {
          tools && tools.map(tool =>
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
  `)

  return (
    <Fragment>
      {data.file && (
        <ToolsSection
          title={data.file.childMarkdownRemark.frontmatter.title}
          tools={data.file.childMarkdownRemark.frontmatter.tools}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Tools

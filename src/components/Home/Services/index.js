import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"
import {
  SectionContainer,
  SectionHeader,
  ServiceListItem
} from "./styles"

export const ServicesSection = ({ title, description, services, preview }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <h2>{title}</h2>
        <p>{description}</p>
      </SectionHeader>
      <Row className="serviceRow">
        {
          services && services.map(service =>
            <Col key={service.title} xs={8} sm={8} md={8} lg={8} xl={8}>
              <ServiceListItem>
                {
                  preview ? <span><img src={service.image} alt={service.title} /></span> :
                  <span>
                    {
                      (service.image.extension === 'svg' && service.image.childImageSharp === null) ? <img src={service.image.publicURL} alt={service.title} /> : <img src={service.image.childImageSharp.fluid.src} alt={service.title} />
                    }
                  </span>
                }
                <h3>{service.title}</h3>
              </ServiceListItem>
            </Col>
          )
        }
      </Row>
    </SectionContainer>
  )
}

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/services.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            services {
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
        <ServicesSection
          title={data.file.childMarkdownRemark.frontmatter.title}
          description={data.file.childMarkdownRemark.frontmatter.description}
          services={data.file.childMarkdownRemark.frontmatter.services}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Services

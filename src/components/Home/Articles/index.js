import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import moment from 'moment'
import { Row, Col } from 'antd'
import {
  SectionContainer,
  SectionHeading,
  ArticlesList,
  ArticleListItem,
  PreviewImage,
  BlogContent
} from './styles';

const Articles = ({ data }) => {

  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              author_image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
                extension
                publicURL
              }
              excerpt
            }
          }
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <SectionHeading>
        <h2>Blogs & Articles</h2>
      </SectionHeading>
      <ArticlesList>
        {
          posts.allMarkdownRemark.edges.map(edge =>
            <ArticleListItem key={edge.node.id} href={edge.node.fields.slug}>
              <Row>
                <Col xs={8} sm={8} md={6} lg={6} xl={6}>
                  <PreviewImage>
                    <span>
                      {
                        (edge.node.frontmatter.author_image.extension === 'svg' && edge.node.frontmatter.author_image.childImageSharp === null) ? <img src={edge.node.frontmatter.author_image.publicURL} alt={edge.node.frontmatter.title} /> : <img src={edge.node.frontmatter.author_image.childImageSharp.fluid.src} alt={edge.node.frontmatter.title} />
                      }
                    </span>
                  </PreviewImage>
                </Col>
                <Col xs={16} sm={16} md={18} lg={18} xl={18} style={{display: `flex`, alignItems: `center`}}>
                  <BlogContent>
                    <h3>{edge.node.frontmatter.title}</h3>
                    <p>{edge.node.frontmatter.excerpt}</p>
                    <span>{moment(edge.node.frontmatter.date).format('DD MMMM YYYY')}</span>
                  </BlogContent>
                </Col>
              </Row>
            </ArticleListItem>
          )
        }
      </ArticlesList>
    </SectionContainer>
  )
}

export default Articles

import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  SectionContainer,
  SectionHeader,
  HighlightsList,
  ListContainer,
  HighlightListItem,
  CountStr,
  ImageText
} from "./styles"

export const HighlightsSection = ({ title, description, highlights, preview }) => {
  return (
    <SectionContainer id="highlights">
      <SectionHeader>
        <h2>{title}</h2>
        <p>{description}</p>
      </SectionHeader>
      <HighlightsList>
        {
          highlights && highlights.map(highlight =>
            <ListContainer key={highlight.id}>
              <HighlightListItem>
                <CountStr>{highlight.count}</CountStr>
                <ImageText>
                  {
                    preview ? <span><img src={highlight.image} alt={highlight.title} /></span> :
                    <span>
                      {
                        (highlight.image.extension === 'svg' && highlight.image.childImageSharp === null) ? <img src={highlight.image.publicURL} alt={highlight.title} /> : <img src={highlight.image.childImageSharp.fluid.src} alt={highlight.title} />
                      }
                    </span>
                  }
                  <h4>{highlight.title}</h4>
                </ImageText>
              </HighlightListItem>
            </ListContainer>
          )
        }
      </HighlightsList>
      <span className="leftWhiteTri"></span>
      <span className="leftYellowRect"></span>
      <span className="leftBlueCir"></span>
      <span className="leftRedSq"></span>
      <span className="rightWhiteSq"></span>
      <span className="rightRedCir"></span>
      <span className="rightYellowTri"></span>
    </SectionContainer>
  )
}

const Highlights = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about/highlights.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            highlights {
              id
              title
              count
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
        <HighlightsSection
          title={data.file.childMarkdownRemark.frontmatter.title}
          description={data.file.childMarkdownRemark.frontmatter.description}
          highlights={data.file.childMarkdownRemark.frontmatter.highlights}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Highlights

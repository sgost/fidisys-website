import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "antd"
import RightArrow from "../../images/arrow_right.png"
import {
  SectionContainer,
  IntouchContainer,
  IntouchSummary,
  IntouchFooter,
  IntouchMedia,
  IntouchCopyrights
} from "./styles"

export const FooterSection = ({ title, image, mediaLinks, copyright, preview }) => {
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
        <IntouchFooter>
          <IntouchMedia>
            {
              mediaLinks && mediaLinks.map(dataItem =>
                <a
                  className="media-link"
                  href={dataItem.link}
                  target="_blank"
                  without="true"
                  rel="noopener noreferrer"
                  key={dataItem.id}
                >
                  {
                    preview ? <img src={dataItem.image} alt={dataItem.title} /> :
                    <Fragment>
                      {
                        (dataItem.image.extension === 'svg' && dataItem.image.childImageSharp === null) ? <img src={dataItem.image.publicURL} alt={dataItem.title} /> : <img src={dataItem.image.childImageSharp.fluid.src} alt={dataItem.title} />
                      }
                    </Fragment>
                  }
                </a>
              )
            }
          </IntouchMedia>
          <IntouchCopyrights>{copyright}</IntouchCopyrights>
        </IntouchFooter>
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
            mediaLinks {
              id
              title
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
            copyright
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
          mediaLinks={data.file.childMarkdownRemark.frontmatter.mediaLinks}
          copyright={data.file.childMarkdownRemark.frontmatter.copyright}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Footer

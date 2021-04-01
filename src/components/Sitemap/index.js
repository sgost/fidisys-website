import { graphql, useStaticQuery, Link } from "gatsby"
import React, { Fragment } from "react"
import Logo from '../../images/logo.png';
import {
  FooterSection,
  SitemapContainer,
  SitemapList,
  IntouchFooter,
  IntouchMedia,
  IntouchCopyrights
} from './styles';

export const SitemapPreviewSection = ({
  sitemapList,
  mediaLinks,
  copyright,
  preview
}) => {
  return (
    <FooterSection>
      <SitemapContainer>
        {
          typeof window !== 'undefined' && window.location.pathname !== '/sitemap/' &&
          <SitemapList className="logoListItem">
            <Link to="/" className="linkItem">
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </SitemapList>
        }
        {
          sitemapList && sitemapList.map(dataItem =>
            <SitemapList key={dataItem.id}>
              <h5>{dataItem.title}</h5>
              {
                dataItem.sitemap && dataItem.sitemap.map(sitemap =>
                  dataItem.title === 'Contact us' ?
                  <Fragment key={sitemap.id}>
                    {
                      sitemap.title === 'Call' &&
                      <a href={'tel:' + sitemap.link} key={sitemap.id} className="linkItem">
                        Call {sitemap.link}
                      </a>
                    }
                    {
                      sitemap.title === 'Email' &&
                      <a href={'mailto:' + sitemap.link} key={sitemap.id} className="linkItem">
                        {sitemap.link}
                      </a>
                    }
                  </Fragment> :
                  <Link to={sitemap.link} key={sitemap.id} className="linkItem">{sitemap.title}</Link>
                )
              }
            </SitemapList>
          )
        }
      </SitemapContainer>
      <IntouchFooter>
          <IntouchMedia>
            {
              mediaLinks && mediaLinks.map(smLink =>
                <a
                  className="media-link"
                  href={smLink.link}
                  target="_blank"
                  without="true"
                  rel="noopener noreferrer"
                  key={smLink.id}
                >
                  {
                    preview ? <img src={smLink.image} alt={smLink.title} /> :
                    <Fragment>
                      {
                        (smLink.image.extension === 'svg' && smLink.image.childImageSharp === null) ? <img src={smLink.image.publicURL} alt={smLink.title} /> : <img src={smLink.image.childImageSharp.fluid.src} alt={smLink.title} />
                      }
                    </Fragment>
                  }
                </a>
              )
            }
          </IntouchMedia>
          <IntouchCopyrights>{copyright}</IntouchCopyrights>
        </IntouchFooter>
    </FooterSection>
  );
};

const SitemapSection = props => {

  const data = useStaticQuery(graphql`
    query {
      sitemaps: file(relativePath: {eq: "sitemap.md"}) {
        childMarkdownRemark {
          frontmatter {
            sitemapList {
              id
              title
              sitemap {
                id
                link
                title
              }
            }
            copyright
          }
        }
      }
      sm: file(relativePath: {eq: "smLinks.md"}) {
        childMarkdownRemark {
          frontmatter {
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
          }
        }
      }
    }
  `);

  const content = data.sitemaps.childMarkdownRemark.frontmatter;
  const mediaContent = data.sm.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      {
        content &&
          <SitemapPreviewSection
            title={content.title}
            sitemapList={content.sitemapList}
            mediaLinks={mediaContent.mediaLinks}
            copyright={content.copyright}
            preview={false}
          />
      }
    </Fragment>
  )
}

export default SitemapSection

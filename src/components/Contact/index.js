import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  SectionContainer,
  ContentContainer,
  DescCont,
  ContactLinksContainer,
  ContactLink,
  ContactIcon,
  ContactInfo,
  IntouchMedia
} from './styles';

export const ContactPreviewSection = ({
  title,
  contact,
  html,
  mediaLinks,
  preview
}) => {

  const contactLink = (info) => {
    if(info.id === 'mail') {
      return `mailto:${info.info}`
    }
    if(info.id === 'whatsapp') {
      if(typeof window !== 'undefined' && window.innerWidth < 769) {
        return `whatsapp://send?phone=${info.info}&text=Hello Fidisys.`
      } else {
        return `https://web.whatsapp.com/send?phone=${info.info}&text=Hello Fidisys.`
      }
    }
  };

  return (
    <SectionContainer>
      <ContentContainer>
        <h2>{title}</h2>
        {
          preview ? <DescCont>{html}</DescCont> : <DescCont dangerouslySetInnerHTML={{ __html: html }} />
        }
        <ContactLinksContainer>
          {
            contact && contact.map(conInfo =>
              <ContactLink href={contactLink(conInfo)} key={conInfo.id} target="_blank" rel="noopener noreferrer">
                {
                  preview ? <ContactIcon><img src={conInfo.image} alt={conInfo.title} /></ContactIcon> :
                  <ContactIcon>
                    {
                      (conInfo.image.extension === 'svg' && conInfo.image.childImageSharp === null) ? <img src={conInfo.image.publicURL} alt={conInfo.title} /> : <img src={conInfo.image.childImageSharp.fluid.src} alt={conInfo.title} />
                    }
                  </ContactIcon>
                }
                <ContactInfo>
                  <span>{conInfo.title}</span>
                  <span className="info">{conInfo.info}</span>
                </ContactInfo>
              </ContactLink>
            )
          }
        </ContactLinksContainer>
      </ContentContainer>
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
    </SectionContainer>
  );
};

const ContactSection = props => {

  const data = useStaticQuery(graphql`
    query {
      contact: file(relativePath: {eq: "contact.md"}) {
        childMarkdownRemark {
          html
          frontmatter {
            title
            contact {
              id
              title
              info
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

  const content = data.contact.childMarkdownRemark.frontmatter;
  const mediaContent = data.sm.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      {
        data.contact &&
        <ContactPreviewSection
          title={content.title}
          contact={content.contact}
          html={data.contact.childMarkdownRemark.html}
          mediaLinks={mediaContent.mediaLinks}
          preview={false}
        />
      }
    </Fragment>
  )
}

export default ContactSection

import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Modal } from "antd"
import ContactSection from "../Contact"
import RightArrow from "../../images/arrow_right.png"
import {
  SectionContainer,
  IntouchContainer,
  IntouchSummary
} from "./styles"

export const FooterSection = ({ title, image, preview }) => {

  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if(isModalVisible) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
    }
  }, [isModalVisible]);

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
          <Button type="primary" onClick={showModal}>
            Get in Touch
            <span className="arrow">
              <img src={RightArrow} alt="arrow" />
            </span>
          </Button>
        </IntouchSummary>
      </IntouchContainer>
      <Modal
        title=""
        visible={isModalVisible}
        footer={null}
        closable
        onCancel={handleCancel}
        getContainer={() => document.getElementById('___gatsby')}
        className="fullPageModal"
      >
        <ContactSection />
      </Modal>
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
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Footer

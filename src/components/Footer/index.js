import React, { Fragment, useState, useEffect, useRef } from "react"
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
      <IntouchContainer>
        <IntouchSummary>
          <p className="intouch-msg">{title}</p>
          {
            preview ? <img className="idea-img" src={image} alt={title} /> :
            <Fragment>
              {
                (image.publicURL) ? <img className="idea-img" src={image.publicURL} alt={title} /> : <img className="idea-img" src={image} alt={title} />
              }
            </Fragment>
          }
          <Button type="primary" onClick={showModal}>
            <span role="presentation" className="btnCont" onMouseEnter={hoverBtn} onMouseLeave={leaveBtn} ref={btnRef}>
              <span className="btn-bg"></span>
              Get in Touch
              <span className="arrow">
                <img src={RightArrow} alt="arrow" />
              </span>
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

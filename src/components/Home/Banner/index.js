import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Row, Col, Modal } from "antd"
import ContactSection from "../../Contact"
import RightArrow from "../../../images/arrow_right.png"
import Gatsbylogo from "../../../data/assets/gatsby_logo.png"
import {
  BannerSection,
  Content,
  ImageContainer,
  CardSec,
  GlassCard,
  Title,
  Logo
} from "./styles"

export const HomeBannerSection = ({ description, image }) => {

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
    <BannerSection>
      <Row className="rowContainer">
        <Col xs={24} sm={24} md={13} lg={13} xl={13}>
          <Content>
            {
              description &&
              <h2>
                {description}
                <span></span>
              </h2>
            }
            <Button type="primary" onClick={showModal}>
              Let’s Work Together
              <span className="arrow">
                <img src={RightArrow} alt="arrow" />
              </span>
            </Button>
          </Content>
        </Col>
        <Col xs={24} sm={24} md={11} lg={11} xl={11} className="bannerImg">
          <ImageContainer>
            <img src={image} alt="banner" />
          </ImageContainer>
          <CardSec>
            <GlassCard>
              <Title>We are an official partner to</Title>
              <Logo>
                <img src={Gatsbylogo} alt="gatsby_logo" />
              </Logo>
            </GlassCard>
            <span className="yellowBg"></span>
          </CardSec>
        </Col>
      </Row>
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
    </BannerSection>
  )
}

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/banner.md" }) {
        childMarkdownRemark {
          frontmatter {
            description
            image {
              childImageSharp {
                fluid {
                  src
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
        <HomeBannerSection
          description={data.file.childMarkdownRemark.frontmatter.description}
          image={
            data.file.childMarkdownRemark.frontmatter.image.childImageSharp
              .fluid.src
          }
        />
      )}
    </Fragment>
  )
}

export default Banner

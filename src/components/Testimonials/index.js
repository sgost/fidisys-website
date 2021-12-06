import React, { Fragment, useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Carousel, Row, Col } from 'antd';
import ArrowLeft from "../../images/arrow_left.png"
import ArrowRight from "../../images/bi_arrow_right.png"
import QuoteLeft from "../../images/quote_icon.png"
import {
  CustomersSection,
  SectionHeading,
  CircleImage,
  WrapperDetails,
  ContentBg,
  CustomerDetails,
  CarouselContainer,
  CustomBg,
  ArrowContainer,
  ResCard,
  ClientDetailsRes
} from './styles';

export const TestimonialsSection = ({
  title,
  customers,
  preview
}) => {

  const slider = useRef(null);

  return (
    <CustomersSection style={{ background: (typeof window !== 'undefined' && window.location.pathname === '/about/') ? '#0D0E12' : '#000000' }}>
      <SectionHeading>
        <h2>{title}</h2>
      </SectionHeading>
      <CarouselContainer>
        <Carousel ref={slider} dots={ typeof window !== 'undefined' && window.innerWidth < 769 ? true : false}>
          {
            customers && customers.map(dataItem =>
              <div key={dataItem.id}>
                {
                  typeof window !== 'undefined' && window.innerWidth < 769 ?
                  <ResCard>
                    <WrapperDetails>
                      <h3>{dataItem.message}</h3>
                      <p>{dataItem.comment}</p>
                    </WrapperDetails>
                    <ClientDetailsRes>
                      {/* <CustomBg>
                        <CircleImage>
                          {
                            preview ? <img src={dataItem.image} alt={dataItem.name} /> :
                            <Fragment>
                              {
                                (dataItem.image.extension === 'svg' && dataItem.image.childImageSharp === null) ? <img src={dataItem.image.publicURL} alt={dataItem.name} /> : <img src={dataItem.image.childImageSharp.fluid.src} alt={dataItem.name} />
                              }
                            </Fragment>
                          }
                        </CircleImage>
                      </CustomBg> */}
                      <CustomerDetails>
                        <h4>{dataItem.name}</h4>
                        <span>{dataItem.role}, {dataItem.company}</span>
                      </CustomerDetails>
                    </ClientDetailsRes>
                  </ResCard>
                  :
                  <Row className="row">
                    {/* <Col xs={24} sm={24} md={7} lg={7} xl={7} className="imageCus">
                      <CustomBg>
                        <CircleImage>
                          {
                            preview ? <img src={dataItem.image} alt={dataItem.name} /> :
                            <Fragment>
                              {
                                (dataItem.image.extension === 'svg' && dataItem.image.childImageSharp === null) ? <img src={dataItem.image.publicURL} alt={dataItem.name} /> : <img src={dataItem.image.childImageSharp.fluid.src} alt={dataItem.name} />
                              }
                            </Fragment>
                          }
                        </CircleImage>
                      </CustomBg>
                    </Col> */}
                    <Col xs={24} sm={24} md={17} lg={17} xl={17}>
                      <WrapperDetails>
                        <h3>{dataItem.message}</h3>
                        <CustomerDetails>
                          <p>{dataItem.comment}</p>
                          <h4>{dataItem.name}</h4>
                          <span>{dataItem.role}, {dataItem.company}</span>
                        </CustomerDetails>
                      </WrapperDetails>
                    </Col>
                  </Row>
                }
              </div>
            )
          }
        </Carousel>
        <ContentBg>
          <img src={QuoteLeft} alt="quote background" />
        </ContentBg>
        <ArrowContainer>
          <span role="presentation" className="leftArrow" onClick={() => slider.current.prev()}>
            <span>
              <img src={ArrowLeft} alt="left_arrow" />
            </span>
          </span>
          <span role="presentation" className="rightArrow" onClick={() => slider.current.next()}>
            <span>
              <img src={ArrowRight} alt="right_arrow" />
            </span>
          </span>
        </ArrowContainer>
      </CarouselContainer>
    </CustomersSection>
  );
};

const Testimonials = props => {

  const[customersContent, setCustomersContent] = useState({});

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "testimonials.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            customers {
              id
              name
              message
              comment
              role
              company
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

  useEffect(() => {
    if(data.file) {
      setCustomersContent(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  return (
    <Fragment>
      {
        data.file &&
        <TestimonialsSection
          title={customersContent.title}
          customers={customersContent.customers}
          preview={false}
        />
      }
    </Fragment>
  )
}

export default Testimonials

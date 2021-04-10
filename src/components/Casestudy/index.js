import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import PlaystoreIcon from "../../images/playstore.svg"
import StarIcon from "../../images/emojione_star.svg"
import QuoteIcon from "../../images/el_quotes.svg"
import {
  Container,
  ProductFeatureBanner,
  ProductFeatureContainer,
  ProductFeatureDetails,
  ProductFeatureWrapper,
  ProductFeaturesReview,
  PlaystoreReviewSmall,
  ProductReviewNote,
  ProductReviewUser,
  ProductReviewQuote,
  ProductFeatureImage,
  ProductImageBanner,
  InfoContainer,
  InfoMaxContainer,
  InfoTextContainer
} from './styles';

export const ViewCasestudy = ({
  title,
  description,
  appLogo,
  bannerImage,
  bannerBackgroundImage,
  review,
  html,
  preview
}) => {
  let listImages = [];
  if(review !== null && review !== undefined) {
    for (let i = 0; i < review.rating; i++) {
      listImages.push(
        <img
          className="playstore-star-icon"
          src={StarIcon}
          alt="star"
          key={i}
        />
      );
    }
  }

  return (
    <Container id="casestudy">
      <ProductFeatureBanner>
        <ProductFeatureContainer>
          <ProductFeatureDetails>
            <ProductFeatureWrapper>
              {
                appLogo !== null &&
                <Fragment>
                  {
                    preview ? <span className="product-feature-logo"><img src={appLogo} alt="logo" /></span> :
                    <span className="product-feature-logo">
                      {
                        (appLogo.extension === 'svg' && appLogo.childImageSharp === null) ? <img src={appLogo.publicURL} alt="logo" /> : <img src={appLogo.childImageSharp.fluid.src} alt="logo" />
                      }
                    </span>
                  }
                </Fragment>
              }
              <h2 className="product-feature-title">{title}</h2>
              <p className="product-feature-caption">
                {description}
              </p>
            </ProductFeatureWrapper>
            {
              review !== null && review !== undefined &&
              <ProductFeaturesReview>
                <PlaystoreReviewSmall>
                  <div className="playstore-icon">
                    <img src={PlaystoreIcon} alt="playstore" />
                  </div>
                  {
                    review && review.rating &&
                    <Fragment>
                      <div className="playstore-star-icons">
                        {listImages}
                      </div>
                      <div className="playstore-rating-num">
                        ({review.rating}/5)
                      </div>
                    </Fragment>
                  }
                </PlaystoreReviewSmall>
                {
                  review && review.comment &&
                  <ProductReviewNote>
                    {review.comment}
                  </ProductReviewNote>
                }
                {
                  review && review.username &&
                  <ProductReviewUser>
                    - {review.username}
                  </ProductReviewUser>
                }
                <ProductReviewQuote>
                  <img src={QuoteIcon} alt="quote" />
                </ProductReviewQuote>
              </ProductFeaturesReview>
            }
          </ProductFeatureDetails>
          {
            bannerImage !== null &&
            <ProductFeatureImage>
              {
                preview ? <span><img src={bannerImage} alt="banner" /></span> :
                <span>
                  {
                    (bannerImage.extension === 'svg' && bannerImage.childImageSharp === null) ? <img src={bannerImage.publicURL} alt="banner" /> : <img src={bannerImage.childImageSharp.fluid.src} alt="banner" />
                  }
                </span>
              }
            </ProductFeatureImage>
          }
        </ProductFeatureContainer>
        {
          bannerBackgroundImage !== null &&
          <ProductImageBanner>
            {
              preview ? <img src={bannerBackgroundImage} alt="frame" /> :
              (bannerBackgroundImage.extension === 'svg' && bannerBackgroundImage.childImageSharp === null) ? <img src={bannerBackgroundImage.publicURL} alt="frame" /> : <img src={bannerBackgroundImage.childImageSharp.fluid.src} alt="frame" />
            }
          </ProductImageBanner>
        }
      </ProductFeatureBanner>
      {
        html !== null &&
        <InfoContainer>
          <InfoMaxContainer>
            {
              preview ? <InfoTextContainer>{html}</InfoTextContainer> : <InfoTextContainer dangerouslySetInnerHTML={{ __html: html }} />
            }
          </InfoMaxContainer>
        </InfoContainer>
      }
    </Container>
  )
}

const Casestudy = ({ data }) => {

  const { casestudy: post } = data;

  const seoData = post.frontmatter.seo;

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <ViewCasestudy
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        appLogo={post.frontmatter.appLogo}
        bannerImage={post.frontmatter.bannerImage}
        bannerBackgroundImage={post.frontmatter.bannerBackgroundImage}
        review={post.frontmatter.review}
        html={post.html}
        preview={false}
      />
    </Fragment>
    )
}

export default Casestudy

export const query = graphql`
  query($slug: String!) {
    casestudy: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        appLogo {
          childImageSharp {
            fluid {
              src
            }
          }
          extension
          publicURL
        }
        bannerImage {
          childImageSharp {
            fluid {
              src
            }
          }
          extension
          publicURL
        }
        bannerBackgroundImage {
          childImageSharp {
            fluid {
              src
            }
          }
          extension
          publicURL
        }
        review {
          rating
          comment
          username
        }
        seo {
          title
          description
          keywords
        }
      }
      html
    }
    seoData: file(relativePath: {eq: "seoWorks.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
  }
`

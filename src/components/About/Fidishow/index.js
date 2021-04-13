import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"
import Loader from "../../Loader"
import moment from "moment"
import {
  SectionContainer,
  PodcastAuthor,
  ContentSection,
  ImageSec,
  WorksList,
  EpisodesContainer,
  EpisodesList,
  EpisodeListItem,
  EpisodeContent
} from "./styles"
import { YOUTUBE_API } from "../../../utils/api"

export const FidishowSection = ({
  title,
  helpText,
  showAuthor,
  pfLogo,
  navId,
  link,
  image,
  html,
  preview
}) => {

  const[playList, setPlayList] = useState([]);

  const[loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${YOUTUBE_API}?part=snippet&playlistId=PLrXRlvlTQNUIwL024RZvbzgad6zc99d4U&maxResults=50&key=AIzaSyDOFnqhyORn0OD8PYobM97fische9YyrPc`)
      .then(res => res.json())
      .then(
        (result) => {
          if(result.items.length > 0) {
            result.items.sort(function(a, b){
              return moment(b.snippet.publishedAt).diff(a.snippet.publishedAt);
            });
          }
          setPlayList(result.items);
          setLoading(false)
        },
        (error) => {
          setLoading(false)
        }
      )
  }, []);

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
    <SectionContainer id={navId}>
      <WorksList>
        <Row className="workRow">
          <Col xs={24} sm={24} md={13} lg={13} xl={13}>
            <ContentSection className="contentSec">
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <PodcastAuthor>
                {helpText}
                {
                  preview ? <span><img src={showAuthor} alt={title} /></span> :
                  <span>
                    {
                      (showAuthor.extension === 'svg' && showAuthor.childImageSharp === null) ? <img src={showAuthor.publicURL} alt={title} /> : <img src={showAuthor.childImageSharp.fluid.src} alt={title} />
                    }
                  </span>
                }
              </PodcastAuthor>
              {
                preview ? <div className="description">{html}</div> : <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
              }
              <a className="viewLink" href={link} target="_blank" without="true" rel="noopener noreferrer">
                <span role="presentation" className="btnCont" onMouseEnter={hoverBtn} onMouseLeave={leaveBtn} ref={btnRef}>
                  <span className="btn-bg"></span>
                  Watch on
                  {
                    preview ? <span className="icon"><img src={pfLogo} alt="logo" /></span> :
                    <span className="icon">
                      {
                        (pfLogo.extension === 'svg' && pfLogo.childImageSharp === null) ? <img src={pfLogo.publicURL} alt="logo" /> : <img src={pfLogo.childImageSharp.fluid.src} alt={title} />
                      }
                    </span>
                  }
                </span>
              </a>
            </ContentSection>
          </Col>
          <Col xs={24} sm={24} md={11} lg={11} xl={11}>
            <ImageSec>
              {
                preview ? <span><img src={image} alt={title} /></span> :
                <span>
                  {
                    (image.extension === 'svg' && image.childImageSharp === null) ? <img src={image.publicURL} alt={title} /> : <img src={image.childImageSharp.fluid.src} alt={title} />
                  }
                </span>
              }
            </ImageSec>
          </Col>
        </Row>
      </WorksList>
      {
        !loading ?
        <EpisodesContainer>
          <h3>Recent Episodes</h3>
          <EpisodesList>
            {
              playList.length > 0 && playList.slice(0, 4).map(list =>
                <EpisodeListItem href={`https://www.youtube.com/watch?v=${list.snippet.resourceId.videoId}`} target="_blank" without="true" rel="noopener noreferrer" key={list.id}>
                  <Row>
                    <Col xs={16} sm={16} md={18} lg={18} xl={18}>
                      <EpisodeContent>
                        <h4>{list.snippet.title}</h4>
                        <span>{moment(list.snippet.publishedAt).format('MMM Do, YYYY')}</span>
                      </EpisodeContent>
                    </Col>
                    <Col xs={8} sm={8} md={6} lg={6} xl={6}>
                      <div>
                        <span>
                          <img src={list.snippet.thumbnails.medium.url} alt={list.snippet.title} />
                        </span>
                      </div>
                    </Col>
                  </Row>
                </EpisodeListItem>
              )
            }
          </EpisodesList>
        </EpisodesContainer> : <Loader />
      }
    </SectionContainer>
  )
}

const Fidishow = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about/fidishow.md" }) {
        childMarkdownRemark {
          html
          frontmatter {
            title
            helpText
            showAuthor {
              childImageSharp {
                fluid {
                  src
                }
              }
              extension
              publicURL
            }
            pfLogo {
              childImageSharp {
                fluid {
                  src
                }
              }
              extension
              publicURL
            }
            navId
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
  `)

  return (
    <Fragment>
      {data.file && (
        <FidishowSection
          title={data.file.childMarkdownRemark.frontmatter.title}
          helpText={data.file.childMarkdownRemark.frontmatter.helpText}
          showAuthor={data.file.childMarkdownRemark.frontmatter.showAuthor}
          pfLogo={data.file.childMarkdownRemark.frontmatter.pfLogo}
          navId={data.file.childMarkdownRemark.frontmatter.navId}
          link={data.file.childMarkdownRemark.frontmatter.link}
          image={data.file.childMarkdownRemark.frontmatter.image}
          html={data.file.childMarkdownRemark.html}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Fidishow

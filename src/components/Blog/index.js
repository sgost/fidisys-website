import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import linkd from "../../data/assets/linkedin.svg"
import twitters from "../../data/assets/twitter.svg"
import {
  BlogPageSection,
  BlogContainer,
  AuthorInfo,
  BlogContent,
} from './styles';
// import { Popover } from 'antd';
// import Authordata from "./pop"
import logo from "../../images/favicon.png"

export const BlogPost = ({
  fields,
  author,
  bio,
  linkdin,
  twitter,
  date,
  title,
  html,
  preview
}) => {

  // const content = data.markdownRemark;

  return (
    <BlogPageSection id="blogView">
      <BlogContainer>
        <div id="BlogContainer">
        <h2 className="blogTitle">{title}</h2>
        <AuthorInfo>
            <img src={logo} alt={author} className="author_image"/>
          <div className="author_info">
          {/* <Popover placement="right" content={<Authordata bio={bio} author={author} previewImages={previewImages}/>}>
          <h4 id="pc_author">{author}</h4>
          </Popover> */}
          <h4>{author}</h4>
            <div>
              <span id="date">{date}</span>
              {
                fields && <span>{fields.readingTime.text} </span>
              }
            </div>
            <div id="socio_lnks">
            {
              linkdin &&
              <a id="link" href={linkdin} target="_blank"  without rel="noopener noreferrer"><img src={linkd} alt="img" className="icon"/></a>
            }
            {
              twitter &&
            <a id="link" href={twitter} target="_blank"  without rel="noopener noreferrer"><img src={twitters} alt="img" className="icon"/></a>
            }
            </div>
          </div>
        </AuthorInfo>
        <BlogContent>
          {
            preview ? <div>{html}</div> : <div dangerouslySetInnerHTML={{ __html: html }} />
          }
        </BlogContent>
        </div>
      </BlogContainer>
    </BlogPageSection>
  )
}

const Blog = ({ data }) => {

  const { blogpost: post } = data;

  const seoData = post.frontmatter.seo;

  let previewImages;
  if(post.frontmatter.previewImages.publicURL) {
    previewImages = post.frontmatter.previewImages.publicURL;
  } else {
    previewImages = post.frontmatter.previewImages;
  }

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <BlogPost
        fields={post.fields}
        previewImages={previewImages}
        author={post.frontmatter.author}
        bio={post.frontmatter.bio}
        linkdin={post.frontmatter.linkdin}
        twitter={post.frontmatter.twitter}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        html={post.html}
        tags={post.frontmatter.tags}
        preview={false}
      />
    </Fragment>
    )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    blogpost: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        author
        previewImages {
          publicURL
        }
        bio
        linkdin
        twitter
        date(formatString: "MMMM DD, YYYY")
        title
        seo {
          title
          description
          keywords
        }
      }
      html
    }
    seoData: file(relativePath: {eq: "seoBlog.md"}) {
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
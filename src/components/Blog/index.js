import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  BlogPageSection,
  BlogContainer,
  AuthorInfo,
  BlogContent,
} from './styles';

export const BlogPost = ({
  fields,
  profile,
  author,
  bio,
  linkdin,
  date,
  title,
  html,
  preview
}) => {

  // const content = data.markdownRemark;

  return (
    <BlogPageSection id="blogView">
      <BlogContainer>
        <AuthorInfo>
          <div className="author_image">
            <img src={profile} alt={author} />
          </div>
          <div className="author_info">
            <h4>{author}</h4>
            <span>{bio}</span>
           
            <div>
              {
                fields && <span>{fields.readingTime.text} &middot; </span>
              }
              <span>{date}</span>
            </div>
            <a id="link" href={linkdin} target="_blank"  without rel="noopener noreferrer">View Profile<ArrowRightOutlined className="icon"/></a>
          </div>
        </AuthorInfo>
        <BlogContent>
          <h2 className="blogTitle">{title}</h2>
          {
            preview ? <div>{html}</div> : <div dangerouslySetInnerHTML={{ __html: html }} />
          }
        </BlogContent>
      </BlogContainer>
    </BlogPageSection>
  )
}

const Blog = ({ data }) => {

  const { blogpost: post } = data;

  const seoData = post.frontmatter.seo;

  let profile;
  if(post.frontmatter.profile.publicURL) {
    profile = post.frontmatter.profile.publicURL;
  } else {
    profile = post.frontmatter.profile;
  }

  const previewImage = post.frontmatter.previewImage.publicURL;

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <BlogPost
        fields={post.fields}
        profile={profile}
        preview_image={previewImage}
        author={post.frontmatter.author}
        bio={post.frontmatter.bio}
        linkdin={post.frontmatter.linkdin}
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
        profile {
          publicURL
        }
        previewImage {
          publicURL
        }
        bio
        linkdin
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
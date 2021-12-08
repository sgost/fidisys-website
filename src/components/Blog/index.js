import React, { Fragment, useState } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  BlogPageSection,
  BlogContainer,
  AuthorInfo,
  BlogContent,
} from './styles';
import linkdins from "../../images/linkedin.png";
import dribble from "../../images/dribble.png";
import github from "../../images/github.png";

export const BlogPost = ({
  fields,
  previewImages,
  author,
  bio,
  linkdin,
  date,
  title,
  html,
  preview
}) => {

  // const content = data.markdownRemark;

  const [scroll, setScroll] = useState(0);
  
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };
  
  window.addEventListener("scroll", onScroll);

console.log(scroll)

  return (
    <BlogPageSection id="blogView">
      <BlogContainer>
        <AuthorInfo>
          <div className="author_image">
            <img src={previewImages} alt={author} />
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

          <div className= {scroll >= 2 ? scroll >= 80 ? "author_info_side2" : "author_info_side" : "author_info_side2"}>
            <h4>{author}</h4>
            {
                fields && <span>{fields.readingTime.text} &middot; </span>
              }
            <h5>Follow Fidisys</h5>
            <div id="social_icons">
            <a id="link" href="https://www.linkedin.com/company/fidisys" target="_blank"  without rel="noopener noreferrer"><img src={linkdins} alt="img" /></a>
            <a id="link" href="https://github.com/fidisys" target="_blank"  without rel="noopener noreferrer"><img src={github} alt="img" /></a>
            <a id="link" href="https://dribbble.com/fidisys" target="_blank"  without rel="noopener noreferrer"><img src={dribble} alt="img" /></a>
            </div>
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
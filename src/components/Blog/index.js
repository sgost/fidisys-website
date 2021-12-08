import React, { Fragment, useState, useEffect } from "react"
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

  useEffect(() => {
    window.addEventListener('resize', showButton);

    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('resize', showButton);

      window.removeEventListener('scroll', changeBackground);
    }
  }, [])

  const [navbar, setNavbar] = useState(false);
  const [button, setButton] = useState();


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
    // eslint-disable-next-line
  }, [])

  const changeBackground = () => {
    if (window.scrollY <= -80) {
      setNavbar(false)
    } else {
      setNavbar(true);
    }
  };

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


          <div className= {navbar ? 'author_info_side' : 'author_info_side2'}>
            <h4>{author}</h4>
            <span>{bio}</span>
            <h5>Follow Fidisys</h5>
            <div id="social_icons">
            <a id="link" href="https://www.linkedin.com/company/fidisys" target="_blank"  without rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png" alt="img" /></a>
            <a id="link" href="https://github.com/fidisys" target="_blank"  without rel="noopener noreferrer"><img src="https://cdn-icons.flaticon.com/png/512/4926/premium/4926624.png?token=exp=1638946379~hmac=bbd9fc53ff82d5f0ed0f6f05658399de" alt="img" /></a>
            <a id="link" href="https://dribbble.com/fidisys" target="_blank"  without rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/1532/1532490.png" alt="img" /></a>
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
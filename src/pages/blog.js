import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/blogs.css"
import SEO from "../components/seo"

const BlogPage = ( { data } ) =>
{

  const blogList = data.blogData.edges;

  const seoData = data.seoData.childMarkdownRemark.frontmatter;

  return (
    <div style={ { background: '#000' } }>
      <SEO title={ seoData.title } description={ seoData.description } keywords={ seoData.keywords } />
      <div className="blogListContainer">
        <h2>Blog</h2>
        {
          blogList && blogList.map( blogItem =>
          {
            return (
              <div key={ blogItem.node.id } className="blogListItem">
                <Link to={ blogItem.node.fields.slug } id="blog_card">
                  <div className="blogInfo">
                  <div className="authorImage">
                      {
                        blogItem.node.frontmatter.authImg.publicURL ?
                          <img src={ blogItem.node.frontmatter.authImg.publicURL } alt={ blogItem.node.frontmatter.author } style={ { borderRadius: `30px` } } /> :
                          <img src={ blogItem.node.frontmatter.authImg } alt={ blogItem.node.frontmatter.author } style={ { borderRadius: `30px` } } />
                      }
                      <p className="blogAuthor">{ blogItem.node.frontmatter.author }</p>
                      <p className="blogDate">
                        <span>.</span>{ blogItem.node.frontmatter.date }</p>
                    </div>
                    <h3>{ blogItem.node.frontmatter.title }</h3>
                    <div id="text">
                    <p>
                      { blogItem.node.frontmatter.excerpt }
                    </p>
                    </div>
                    <div id="dev_type">
                      <button style = {{background: `rgba(53, 208, 247, 0.3)`}}>{ blogItem.node.frontmatter.previewTitle }</button>
                      <p>{
                blogItem.node.fields && <span>{blogItem.node.fields.readingTime.text}</span>}</p>
                    </div>
                  </div>
                  {
                        blogItem.node.frontmatter.previewImages.publicURL ?
                          <img src={ blogItem.node.frontmatter.previewImages.publicURL } alt={ blogItem.node.frontmatter.author } alt={ blogItem.node.frontmatter.title } id="preview_img" /> :
                          <img src={ blogItem.node.frontmatter.previewImages } alt={ blogItem.node.frontmatter.author } alt={ blogItem.node.frontmatter.title } id="preview_img" />
                      }
                </Link>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    blogData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            excerpt
            author
            authImg {
              publicURL
            }
            previewImages {
              publicURL
            }
            previewTitle
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
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
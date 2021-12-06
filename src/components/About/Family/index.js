import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import btn from "../../../images/btnnormal.svg"
import hover from "../../../images/btnhover.svg"
import
  {
    FamilyContainer,
  } from "./styles"

export const Family = ( { title, cardsdata } ) =>
{

  return (
    <FamilyContainer>
      <h1>{ title }</h1>
      <div id="cardsContainer">
        { cardsdata && cardsdata.map( ( cardsdata, i ) =>
          <div span={ 8 } id="cards" key={ i }>
            {
              cardsdata.image.publicURL ?
                <img src={ cardsdata.image.publicURL } alt={ cardsdata.title } />
                :
                <img src={ cardsdata.image } alt={ cardsdata.title } />
            }
            <p>{ cardsdata.title }</p>
            <p>{ cardsdata.description }</p>
            <a href={ cardsdata.link } target="_blank" without rel="noopener noreferrer">
              <img src={ btn } alt="img" className="btn" id="btn" />
              <img src={ hover } alt="img" className="btn" id="btn2" />
            </a>
          </div>
        ) }
      </div>
    </FamilyContainer>
  )
}
const Familys = () =>
{
  const data = useStaticQuery( graphql`
      query {
        file(relativePath: { eq: "about/family.md" }) {
          childMarkdownRemark {
            frontmatter {
                title
                members {
                title
                description
                link
                image {
                  publicURL
                }
              }
            }
          }
        }
      }
    `)

  return (
    <Fragment>
      { data.file && (
        <Family
          title={ data.file.childMarkdownRemark.frontmatter.title }
          cardsdata={ data.file.childMarkdownRemark.frontmatter.members }
        />
      ) }
    </Fragment>
  )
}

export default Familys

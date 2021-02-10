import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  SectionContainer,
  SectionHeader,
  ClientsList,
  ClientDetail
} from "./styles"

export const ClientsSection = ({ title, description, clients, preview }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <h2>{title}</h2>
        <p>{description}</p>
      </SectionHeader>
      <ClientsList>
        {
          clients && clients.map(client =>
            <ClientDetail key={client.id}>
              {
                preview ? <span><img src={client.image} alt={client.title} /></span> :
                <span>
                  {
                    (client.image.extension === 'svg' && client.image.childImageSharp === null) ? <img src={client.image.publicURL} alt={client.title} /> : <img src={client.image.childImageSharp.fluid.src} alt={client.title} />
                  }
                </span>
              }
            </ClientDetail>
          )
        }
      </ClientsList>
    </SectionContainer>
  )
}

const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/clients.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            clients {
              id
              title
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
  `)

  return (
    <Fragment>
      {data.file && (
        <ClientsSection
          title={data.file.childMarkdownRemark.frontmatter.title}
          description={data.file.childMarkdownRemark.frontmatter.description}
          clients={data.file.childMarkdownRemark.frontmatter.clients}
          preview={false}
        />
      )}
    </Fragment>
  )
}

export default Clients

import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  SectionContainer,
  SectionHeader,
  GridContainer,
  GridItem
} from "./styles"

const DribbbleSection = () => {

  const[allData, setAllData] = useState([]);

  const data = useStaticQuery(graphql`
    query {
      allDribbbleShot {
        nodes {
          id
          title
          url
          cover
        }
      }
    }
  `);

  useEffect(() => {
    if(data) {
      setAllData(data.allDribbbleShot.nodes);
    }
  }, [data]);

  return (
    <SectionContainer>
      <SectionHeader>
        <span>Follow us on</span>
        <h2>Dribbble</h2>
      </SectionHeader>
      <GridContainer>
        {
          allData && allData.map(dataItem =>
            <Fragment key={dataItem.url}>
              {
                dataItem.cover !== null && dataItem.title !== "Day - Night Transition" && dataItem.title !== "Minimal Home Scene Voxel Art" && dataItem.title !== "Wall-E Eve in Pixar Soul Style" && dataItem.title !== "ContentConcepts - Website" && dataItem.title !== "Icons with 3D effect created using Figma" &&
                <GridItem href={dataItem.url} target="_blank" without="true" rel="noopener noreferrer">
                  <img src={dataItem.cover} alt={dataItem.title} />
                </GridItem>
              }
            </Fragment>
          )
        }
      </GridContainer>
    </SectionContainer>
  )
}

export default DribbbleSection

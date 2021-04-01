import React, { Fragment, useState, useEffect, useCallback,useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col, Select } from "antd"
import Arrow from "../../../images/arrow_down.png"
import {
  SectionContainer,
  WorkItem,
  ImageContainer,
  WorkDescription,
  TagsList,
  TagItem,
  FilterContainer
} from "./styles"

const WorksList = props => {

  const { Option } = Select;

  const[worksData, setWorksData] = useState([]);

  const[allData, setAllData] = useState([]);

  const[filterVal, setFilterVal] = useState('all');

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(works)\\/.*\\\\.md$/"}}) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            theme
            image {
              childImageSharp {
                fluid {
                  originalImg
                }
              }
              extension
              publicURL
            }
            categories
            workTags {
              title
              themeColor
              themeBg
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(data) {
      setWorksData(data.allMarkdownRemark.nodes);
      setAllData(data.allMarkdownRemark.nodes);
    }
  }, [data]);

  //filter

  const filterData = useCallback((val) => {
    if(val === 'all') {
      setWorksData(allData);
    } else {
      var worksDataList = allData;
      if(worksDataList.length > 0) {
        var data_filter = worksDataList.filter(function (element) {
          return element.frontmatter.categories.some( function (subElement) {
            return subElement === val
          });
        });
        setWorksData(data_filter);
      }
    }
  }, [allData]);

  const filterChange = (value) => {
    setFilterVal(value);
    filterData(value);
  };

  const myRef = useRef(null)

  useEffect(() => {
    if(props.filter) {
      let str = props.filter;
      str = str.substring(1);
      setFilterVal(str);
      filterData(str);
      myRef.current.scrollIntoView();
    }
  }, [props.filter, filterData]);

  return (
    <SectionContainer ref={myRef}>
      <FilterContainer>
        <span className="selLabel">Show me</span>
        <Select defaultValue="all" value={filterVal} style={{ width: 372 }} onChange={filterChange} suffixIcon={<img src={Arrow} alt="arrow" />}>
          <Option value="all">All Projects</Option>
          <Option value="websites">Websites</Option>
          <Option value="mobileapp">Mobile Apps</Option>
          <Option value="ui/ux">UI/UX Projects</Option>
        </Select>
      </FilterContainer>
      <Row className="worksListContainer">
        {
          worksData && worksData.map(dataItem =>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} key={dataItem.id} className="workCol">
              <WorkItem>
                <ImageContainer bg={dataItem.frontmatter.theme}>
                  {
                    dataItem.frontmatter.image !== null &&
                    <Fragment>
                      {
                        (dataItem.frontmatter.image.extension === 'svg' && dataItem.frontmatter.image.childImageSharp === null) ? <img src={dataItem.frontmatter.image.publicURL} alt={dataItem.frontmatter.title} /> : <img src={dataItem.frontmatter.image.childImageSharp.fluid.originalImg} alt={dataItem.frontmatter.title} />
                      }
                    </Fragment>
                  }
                </ImageContainer>
                <WorkDescription>
                  <h3>{dataItem.frontmatter.title}</h3>
                  <p>{dataItem.frontmatter.description}</p>
                  <TagsList>
                    {
                      dataItem.frontmatter.workTags && dataItem.frontmatter.workTags.map(tag =>
                        <TagItem key={tag.title} color={tag.themeColor} background={tag.themeBg}>{tag.title}</TagItem>
                      )
                    }
                  </TagsList>
                </WorkDescription>
              </WorkItem>
            </Col>
          )
        }
      </Row>
    </SectionContainer>
  )
}

export default WorksList

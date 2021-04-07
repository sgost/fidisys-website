import React, { Fragment, useState, useEffect, useCallback } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Row, Col, Modal, Button } from "antd"
import Arrow from "../../../images/arrow_down.png"
import {
  SectionContainer,
  WorkItem,
  ImageContainer,
  WorkDescription,
  TagsList,
  TagItem,
  FilterContainer,
  NavLinkContainer,
  NavLink
} from "./styles"
import Loader from "../../Loader"

const WorksList = props => {

  console.log(props);

  const[loading, setLoading] = useState(true);

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
      setLoading(false);
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

  useEffect(() => {
    if(props.id) {
      let str = props.id;
      setFilterVal(str);
      filterData(str);
    }
  }, [props.id, filterData]);

  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = flag => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if(isModalVisible) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
    }
  }, [isModalVisible]);

  const showActiveVal = () => {
    switch(filterVal) {
      case 'all':
        return 'All Projects'
      case 'websites':
        return 'Websites'
      case 'mobileapp':
        return 'Mobile Apps'
      case 'ui-ux':
        return 'UI/UX Projects'
      default:
        return 'All Projects'
    }
  };

  return (
    <SectionContainer>
      <FilterContainer>
        <span className="selLabel">Show me</span>
        <Button onClick={showModal} className="filterBtn">
          {showActiveVal()}
          <span className="downArrow">
            <img src={Arrow} alt="arrow" />
          </span>
        </Button>
        {/* <Select defaultValue="all" value={filterVal} style={{ width: 372 }} onChange={filterChange} suffixIcon={<img src={Arrow} alt="arrow" />}>
          <Option value="all">All Projects</Option>
          <Option value="websites">Websites</Option>
          <Option value="mobileapp">Mobile Apps</Option>
          <Option value="ui-ux">UI/UX Projects</Option>
        </Select> */}
      </FilterContainer>
      {
        !loading ?
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
        </Row> : <Loader />
      }
      <Modal
        title=""
        visible={isModalVisible}
        footer={null}
        closable
        onCancel={handleCancel}
        getContainer={() => document.getElementById('___gatsby')}
        className="fullPageModal worksFilterModal"
      >
        <NavLinkContainer>
          <NavLink key="all">
            <Link to="/works/all" className={filterVal === 'all' && 'activeLink'} activeClassName="activeLink" onClick={handleCancel}>All Projects</Link>
          </NavLink>
          <NavLink key="websites">
            <Link to="/works/websites" activeClassName="activeLink" onClick={handleCancel}>Websites</Link>
          </NavLink>
          <NavLink key="mobileapp">
            <Link to="/works/mobileapp" activeClassName="activeLink" onClick={handleCancel}>Mobile Apps</Link>
          </NavLink>
          <NavLink key="ui-ux">
            <Link to="/works/ui-ux" activeClassName="activeLink" onClick={handleCancel}>UI/UX Projects</Link>
          </NavLink>
        </NavLinkContainer>
      </Modal>
    </SectionContainer>
  )
}

export default WorksList
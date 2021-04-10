import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import { Button, Drawer, Modal } from "antd"
import ContactSection from "../Contact"
import Logo from '../../images/logo.png';
import MenuIconImg from "../../images/menu_icon.png"
import {
  HeaderContainer,
  LogoContainer,
  NavBarContainer,
  NavLinkContainer,
  NavLink,
  MenuIcon,
  ResNavMenu,
  IntouchMedia
} from './styles';

const Header = props => {

  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = flag => {
    setIsModalVisible(true);
    if(flag === 'mob') {
      setVisible(false);
    }
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

  //drawer
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const smdata = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "smLinks.md"}) {
      childMarkdownRemark {
        frontmatter {
          mediaLinks {
            id
            title
            link
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
`);

  const smLinks = (
    <IntouchMedia>
      {
        smdata && smdata.file.childMarkdownRemark.frontmatter.mediaLinks && smdata.file.childMarkdownRemark.frontmatter.mediaLinks.map(smLink =>
          <a
            className="media-link"
            href={smLink.link}
            target="_blank"
            without="true"
            rel="noopener noreferrer"
            onClick={onClose}
            key={smLink.id}
          >
            {
              (smLink.image.extension === 'svg' && smLink.image.childImageSharp === null) ? <img src={smLink.image.publicURL} alt={smLink.title} /> : <img src={smLink.image.childImageSharp.fluid.src} alt={smLink.title} />
            }
          </a>
        )
      }
    </IntouchMedia>
  );

  return (
    <HeaderContainer id="header">
      <LogoContainer>
        <h1>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </h1>
      </LogoContainer>
      <div className="navMenu">
        <NavBarContainer >
          <NavLinkContainer id="navLinks">
            <NavLink key="work">
              <Link to="/works/" activeClassName="activeLink" partiallyActive={true}>Work</Link>
            </NavLink>
            <NavLink key="services">
              <Link to="/services/" activeClassName="activeLink" partiallyActive={true}>Services</Link>
            </NavLink>
            <NavLink key="about">
              <Link to="/about/" activeClassName="activeLink" partiallyActive={true}>About</Link>
            </NavLink>
            <NavLink key="blog">
              <Link to="/blog/" activeClassName="activeLink" partiallyActive={true}>Blog</Link>
            </NavLink>
          </NavLinkContainer>
          <Button onClick={showModal}>Contact Us</Button>
        </NavBarContainer>
      </div>
      <ResNavMenu>
        <MenuIcon>
          <span role="presentation" onClick={showDrawer}>
            <img src={MenuIconImg} alt="menu" />
          </span>
        </MenuIcon>
        <Drawer
          placement="right"
          onClose={onClose}
          visible={visible}
          className="drawerNavMenu"
          title={
            <Link to="/" className="menuLogo">
              <img src={Logo} alt="logo" />
            </Link>
          }
          footer={smLinks}
        >
          <NavBarContainer >
            <NavLinkContainer>
              <NavLink key="home">
                <Link to="/" activeClassName="activeLink" onClick={onClose}>Home</Link>
              </NavLink>
              <NavLink key="work">
                <Link to="/works/" activeClassName="activeLink" partiallyActive={true} onClick={onClose}>Work</Link>
              </NavLink>
              <NavLink key="services">
                <Link to="/services/" activeClassName="activeLink" partiallyActive={true} onClick={onClose}>Services</Link>
              </NavLink>
              <NavLink key="about">
                <Link to="/about/" activeClassName="activeLink" partiallyActive={true} onClick={onClose}>About</Link>
              </NavLink>
              <NavLink key="blog">
                <Link to="/blog/" activeClassName="activeLink" partiallyActive={true} onClick={onClose}>Blog</Link>
              </NavLink>
              <NavLink key="contact">
                <span className="contactLink" role="presentation" onClick={() => showModal('mob')}>Contact Us</span>
                {/* <Link to="/" onClick={() => showModal('mob')}>Contact Us</Link> */}
              </NavLink>
            </NavLinkContainer>
          </NavBarContainer>
        </Drawer>
      </ResNavMenu>
      <Modal
        title=""
        visible={isModalVisible}
        footer={null}
        closable
        onCancel={handleCancel}
        getContainer={() => document.getElementById('___gatsby')}
        className="fullPageModal"
      >
        <ContactSection />
      </Modal>
    </HeaderContainer>
  )
}

export default Header

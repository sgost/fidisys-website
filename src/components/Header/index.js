import { Link } from "gatsby"
import React, { useState } from "react"
import { Button, Drawer } from "antd"
import Logo from '../../images/logo.png';
import MenuIconImg from "../../images/menu_icon.png"
import LinkedinLogo from "../../images/linkedin.png"
import GithubLogo from "../../images/github.png"
import DribbbleLogo from "../../images/dribbble.png"
import MediumLogo from "../../images/medium.png"
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

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const smLinks = (
    <IntouchMedia>
      <a
        className="media-link"
        href="https://www.linkedin.com/company/fidisys"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        <img src={LinkedinLogo} alt="Linkedin" />
      </a>
      <a
        className="media-link"
        href="https://github.com/fidisys"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        <img src={GithubLogo} alt="Github" />
      </a>
      <a
        className="media-link"
        href="https://dribbble.com/fidisys"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        <img src={DribbbleLogo} alt="Dribbble" />
      </a>
      <a
        className="media-link"
        href="https://medium.com/@fidisys"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        <img src={MediumLogo} alt="Medium" />
      </a>
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
          <NavLinkContainer>
            <NavLink key="work">
              <Link to="/works/" activeClassName="activeLink">Work</Link>
            </NavLink>
            <NavLink key="technologies">
              <Link to="/technologies/" activeClassName="activeLink">Technologies</Link>
            </NavLink>
            <NavLink key="about">
              <Link to="/about/" activeClassName="activeLink">About</Link>
            </NavLink>
          </NavLinkContainer>
          <Button>Contact Us</Button>
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
                <Link to="/works/" activeClassName="activeLink" onClick={onClose}>Work</Link>
              </NavLink>
              <NavLink key="technologies">
                <Link to="/technologies/" activeClassName="activeLink" onClick={onClose}>Technologies</Link>
              </NavLink>
              <NavLink key="about">
                <Link to="/about/" activeClassName="activeLink" onClick={onClose}>About</Link>
              </NavLink>
              <NavLink key="contact">
                <Link to="/" onClick={onClose}>Contact Us</Link>
              </NavLink>
            </NavLinkContainer>
          </NavBarContainer>
        </Drawer>
      </ResNavMenu>
    </HeaderContainer>
  )
}

export default Header

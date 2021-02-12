import { Link } from "gatsby"
import React from "react"
import { Button } from "antd"
import Logo from '../../images/logo.png';
import {
  HeaderContainer,
  LogoContainer,
  NavBarContainer,
  NavLinkContainer,
  NavLink
} from './styles';

const Header = props => {
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
    </HeaderContainer>
  )
}

export default Header

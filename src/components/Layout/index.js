import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from '../../styles/global-styles';

import Header from "../Header"
import Footer from "../Footer"
import SitemapSection from "../Sitemap"

const Layout = props => {
  //scroll
  useEffect(() => {
    if(typeof window !== 'undefined') {
      const handleScroll = (e) => {
        const position = window.scrollY;
        if(position > 100 ) {
          if(document.getElementById('header') !== null) {
            document.getElementById('header').classList.add("gradBg");
          }
        } else {
          if(document.getElementById('header') !== null) {
            document.getElementById('header').classList.remove("gradBg");
          }
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{props.children}</main>
      <Footer />
      <SitemapSection />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

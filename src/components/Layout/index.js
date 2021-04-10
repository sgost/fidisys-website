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

        //casestudy page
        var caseStudyElem = document.getElementById('casestudy');
        var navlinkElem = document.getElementById('navLinks').querySelectorAll('li a');
        if(caseStudyElem !== null && window.location.pathname.indexOf('/works/') >= 0) {
          var rect = caseStudyElem.getBoundingClientRect();
          var elemTop = rect.top;
          var elemBottom = rect.bottom;
          var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
          if(navlinkElem !== null) {
            for (var i = 0; i < navlinkElem.length; i++) {
              if(isVisible && position > 100) {
                navlinkElem[i].style.color = "#000000";
              } else {
                navlinkElem[i].style.color = "#DDDDDD";
              }
            }
          }
        } else {
          if(navlinkElem !== null) {
            for (var j = 0; j < navlinkElem.length; j++) {
              navlinkElem[j].style.color = "#DDDDDD";
            }
          }
        }

        //blogpage
        var blogElem = document.getElementById('blogView');
        if(blogElem !== null && window.location.pathname.indexOf('/blog/') >= 0) {
          var rectBlog = blogElem.getBoundingClientRect();
          var elemTopBlog = rectBlog.top;
          var elemBottomBlog = rectBlog.bottom;
          var isVisibleBlog = elemTopBlog < window.innerHeight && elemBottomBlog >= 0;
          if(navlinkElem !== null) {
            for (var ib = 0; ib < navlinkElem.length; ib++) {
              if(isVisibleBlog && position > 100) {
                navlinkElem[ib].style.color = "#000000";
              } else {
                navlinkElem[ib].style.color = "#DDDDDD";
              }
            }
          }
        } else {
          if(navlinkElem !== null && window.location.pathname.indexOf('/blog/') >= 0) {
            for (var jb = 0; jb < navlinkElem.length; jb++) {
              navlinkElem[jb].style.color = "#DDDDDD";
            }
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
      {
        typeof window !== 'undefined' && window.location.pathname !== '/sitemap/' &&  <Footer />
      }
      {
        typeof window !== 'undefined' && window.location.pathname !== '/sitemap/' &&  <SitemapSection />
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

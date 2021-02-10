import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from '../../styles/global-styles';

import Header from "../Header"
import Footer from "../Footer"

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import ContactIcons from "./contact-icons"
import "./layout.css"

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Raleway'
  }
`

const Footer = styled.footer`
  background: linear-gradient(to right bottom, #1f2833, #0b0c10);
  background-size: cover;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div>
        <main>{children}</main>
        <Footer>
          <ContactIcons margin="2rem" size="3rem" />
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

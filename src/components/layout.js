/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

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
  padding: 1rem 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <div>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Jeremy Crichton | Resume | Jade |
          Contact
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

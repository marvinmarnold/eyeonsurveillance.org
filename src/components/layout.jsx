/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
        </footer>

          {/* JS Global Compulsory */}
          <script src="vendor/jquery/dist/jquery.min.js"></script>
          <script src="vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
          <script src="vendor/popper.js/dist/umd/popper.min.js"></script>
          <script src="vendor/bootstrap/bootstrap.min.js"></script>

          {/* JS Implementing Plugins */}
          <script src="vendor/hs-megamenu/src/hs.megamenu.js"></script>
          <script src="vendor/svg-injector/dist/svg-injector.min.js"></script>
          <script src="vendor/appear.js"></script>
          <script src="vendor/jquery-validation/dist/jquery.validate.min.js"></script>
          <script src="vendor/gmaps/gmaps.min.js"></script>

          {/* JS Front */}
          <script src="js/hs.core.js"></script>
          <script src="js/components/hs.header.js"></script>
          <script src="js/components/hs.unfold.js"></script>
          <script src="js/components/hs.scroll-nav.js"></script>
          <script src="js/components/hs.svg-injector.js"></script>
          <script src="js/components/hs.validation.js"></script>
          <script src="js/components/hs.g-map.js"></script>
          <script src="js/components/hs.go-to.js"></script>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

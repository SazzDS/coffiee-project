/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";

// import Header from "./header"
import "./layout.css";
import Navbar from "./Globals/Navbar";

const Layout = ({ children }) => (
    <>
	    <Navbar />
		{children}
    </>
  )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

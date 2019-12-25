import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../plugins/bootstrap/css/bootstrap.min.css"
import BackgroundSection from "../components/Globals/BackgroundSection";
const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
	<BackgroundSection 
	img={data.img.childImageSharp.fluid} 
	title="BackgroundSection's Data" 
	styleClass="default-background" 
	/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export const query = graphql`{
  img:file(relativePath:{
    eq: "bg.jpg"
  }){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`;


export default IndexPage


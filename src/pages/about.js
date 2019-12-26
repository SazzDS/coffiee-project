import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../plugins/bootstrap/css/bootstrap.min.css";
import BackgroundSection from "../components/Globals/BackgroundSection";
import FooterSection from "../components/Globals/FooterSection";
import InfoSection from "../components/Home/Info";
const AboutPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
	<BackgroundSection 
	img={data.img.childImageSharp.fluid} 
	title="About Background Section's Data" 
	styleClass="about-background" 
	></BackgroundSection>
    <InfoSection></InfoSection>
    <FooterSection></FooterSection>
  </Layout>
)

export const query = graphql`{
  img:file(relativePath:{
    eq: "gatsby-astronaut.png"
  }){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`;


export default AboutPage


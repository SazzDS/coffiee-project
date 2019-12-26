import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../plugins/bootstrap/css/bootstrap.min.css";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Menu from "../components/Home/Menu";
import FooterSection from "../components/Globals/FooterSection";
import InfoSection from "../components/Home/Info";
const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
	<BackgroundSection 
	img={data.img.childImageSharp.fluid} 
	title="Background Section's Data" 
	styleClass="default-background" 
	></BackgroundSection>
    <Menu items={data.menu}></Menu>
    <InfoSection />
    <FooterSection />
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
  menu: allContentfulItems{
    edges{
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width: 50, height: 50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`;


export default IndexPage


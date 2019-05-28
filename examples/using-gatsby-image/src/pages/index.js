import React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { avatar } from './index.module.css'

const IndexPage = ({ data }) => console.log(data) || (
  <Layout>
    <SEO title="Home" />
    <h1>Fluid Image, e.g. a banner</h1>
    <Image fluid={data.water.childImageSharp.fluid} />
    <h1>Fixed images, e.g. an avatar</h1>
    <Image className={avatar} fixed={data.man.childImageSharp.fixed} />
    <Image className={avatar} fixed={data.woman.childImageSharp.fixed} />
    <em>Looking for more? Check out <a href="https://www.gatsbyjs.org/packages/gatsby-image/#fragments">using _other_ fragments (e.g. <code>GatsbyImageSharpFixed_tracedSVG</code>)</a> and see the effect(s)!</em>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    man: file(relativePath:{
      eq:"man.jpg"
    }) {
      childImageSharp {
        fixed(height:96) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    woman: file(relativePath:{
      eq:"woman.jpg"
    }) {
      childImageSharp {
        fixed(height:96) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    water: file(relativePath:{
      eq:"water.jpg"
    }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
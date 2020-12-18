import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"Admin page of " + site.siteMetadata.title} />
      </Helmet>
      <div className="two-grids -contact">
          <p>@todo</p>
      </div>
    </Layout>
  )
}

export default AboutPage
export const pageQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

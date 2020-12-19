import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import HeroHeader from '../components/heroHeader'
import Section from '../components/section'

const IndexPage = ({
    data: {
        site,
        allMarkdownRemark: { edges },
    },
}) => {
    
    return (
        <Layout>
            
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta name="description" content={site.siteMetadata.description} />
            </Helmet>
            
            {/* <HeroHeader/> */}
            
            {edges.map(({ node }, i) => (
                <Section id={(i + 1).toString()} node={node} />
            ))}
            
        </Layout>
    )
    
}

export default IndexPage

export const pageQuery = graphql`
    query indexPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        thumbnail
                        metaDescription
                    }
                    html
                }
            }
        }
    }
`

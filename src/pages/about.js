import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = ({
    data: {
        site: {
            siteMetadata: {
                about: {
                    title,
                    description,
                    headline,
                    body,
                }
            }
        }
    }
}) => {
    
    return (
        <Layout>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div
                className="primary-content" 
                dangerouslySetInnerHTML={{ __html: body}}
            />
        </Layout>
    )
    
}

export default AboutPage

export const pageQuery = graphql`
    query aboutPageQuery {
        site {
            siteMetadata {
                title
                description
                about {
                    headline
                    body
                }
            }
        }
    }
`

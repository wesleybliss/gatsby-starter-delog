import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

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
    
    const props = {
        title,
        description,
        headline,
        body,
    }
    
    return <Page {...props} />
    
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

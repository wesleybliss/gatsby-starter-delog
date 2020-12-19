import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const DonatePage = ({
    data: {
        site: {
            siteMetadata: {
                donate: {
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

export default DonatePage

export const pageQuery = graphql`
    query donatePageQuery {
        site {
            siteMetadata {
                title
                description
                donate {
                    headline
                    body
                }
            }
        }
    }
`

import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const FundraisingPage = ({
    data: {
        site: {
            siteMetadata: {
                fundraising: {
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

export default FundraisingPage

export const pageQuery = graphql`
    query fundraisingPageQuery {
        site {
            siteMetadata {
                title
                description
                fundraising {
                    headline
                    body
                }
            }
        }
    }
`

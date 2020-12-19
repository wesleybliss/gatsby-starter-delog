import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const query = graphql`
    query HeadingQuery {
        site {
            siteMetadata {
                home {
                    headline
                    body
                }
            }
        }
    }
`

const render = (data) => (
    
    <div className="hero-header">
        
        <div className="headline">{data.site.siteMetadata.home.headline}</div>
        
        <div
            className="primary-content" 
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.body}}
        />
        
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        
    </div>
    
)

export default () => (
    <StaticQuery
        query={query}
        render={render}
    />
)

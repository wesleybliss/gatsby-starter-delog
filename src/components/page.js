import React from 'react'
import Helmet from 'react-helmet'
import Layout from './layout'
import SectionContent from './section-content'

const Page = ({ title, description, headline, body }) => {
    
    const props = { id: title, title: headline, body }
    
    return (
        
        <Layout>
            
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            
            <SectionContent {...props} />
            
        </Layout>
        
    )
    
}

export default Page

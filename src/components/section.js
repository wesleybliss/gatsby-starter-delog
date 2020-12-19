import React from 'react'
import SectionContent from './section-content'

const Section = ({ id, node: { frontmatter, html } }) => {
    
    const props = {
        id,
        title: frontmatter.title,
        body: html,
        thumbnail: frontmatter.thumbnail,
    }
    
    return (
        <SectionContent {...props} />
    )
    
}

export default Section

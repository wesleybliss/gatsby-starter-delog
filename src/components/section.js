import React from 'react'

const Section = ({ id, node: { frontmatter, html } }) => (
    
    <section id={`section-${id}`}>
        
        <header>
            <h2>{frontmatter.title}</h2>
        </header>
        
        <div className="content">
            
            <p dangerouslySetInnerHTML={{ __html: html }} />
            
            <span className="image main">
                {!!frontmatter.thumbnail && (
                    <img src={frontmatter.thumbnail} alt={frontmatter.title} />
                )}
            </span>
            
        </div>
        
    </section>
    
)

export default Section

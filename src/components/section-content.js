import React from 'react'

const SectionContent = ({ id, title, body, thumbnail }) => (
    
    <section id={`section-${id}`}>
        
        <header>
            <h2>{title}</h2>
        </header>
        
        <div className="content">
            
            <p dangerouslySetInnerHTML={{ __html: body }} />
            
            <span className="image main">
                {!!thumbnail && (
                    <img src={thumbnail} alt={title} />
                )}
            </span>
            
        </div>
        
    </section>
    
)

export default SectionContent

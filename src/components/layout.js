import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation'
import 'prismjs/themes/prism-okaidia.css'
import Helmet from 'react-helmet'
import denimPhoto from '../images/denim.png'

export default ({ children }) => {
    
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    
    return (
        
        <React.Fragment>
            
            <Helmet
                bodyAttributes={{
                    class: 'scrollbar-minimal',
                }} />
            
            <div id="wrapper">
                
                <header className="site-header">
                    {/* <div className="site-title">
                        <Link to="/">{data.site.siteMetadata.title}</Link>
                    </div> */}
                    <Navigation />
                </header>
                
                <section className="intro">
                    <header>
                        <h2>The Sieb</h2>
                        <h1>
                            Denim &amp; Diamonds
                            <br />
                            Foundation
                        </h1>
                        {/* <p>A free responsive site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> / <a href="https://html5up.net">HTML5 UP</a></p> */}
                        <ul className="actions">
                            <li>
                                <a href="#first" className="arrow scrolly">
                                    <span className="label">Next</span>
                                </a>
                            </li>
                        </ul>
                        
                        <button className="button-intro wide">
                            DONATE NOW
                        </button>
                    </header>
                    <div className="content">
                        <span className="image fill" data-position="center">
                            <img src={denimPhoto} alt="" />
                        </span>
                    </div>
                </section>
                
                {children}
                
            </div>
            
        </React.Fragment>
        
    )
    
}

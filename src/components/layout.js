import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation'
import 'prismjs/themes/prism-okaidia.css'
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
    
    /* return (
        <div className="site-wrapper">
            <header className="site-header">
                <div className="site-title">
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </div>
                <Navigation />
            </header>
            {children}
            <footer className="site-footer">
                <p>&copy; {new Date().getFullYear()} Made with <span role="img" aria-label="love">❤️</span> in NYC</p>
            </footer>
        </div>
    ) */
    
    return (
        <div id="wrapper">
            
            <header className="site-header">
                {/* <div className="site-title">
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </div> */}
                <Navigation />
            </header>
            
            <section class="intro">
                <header>
                    <h2>The Sieb</h2>
                    <h1>
                        Denim &amp; Diamonds
                        <br />
                        Foundation
                    </h1>
                    {/* <p>A free responsive site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> / <a href="https://html5up.net">HTML5 UP</a></p> */}
                    <ul class="actions">
                        <li>
                            <a href="#first" class="arrow scrolly">
                                <span class="label">Next</span>
                            </a>
                        </li>
                    </ul>
                </header>
                <div class="content">
                    <span class="image fill" data-position="center">
                        <img src={denimPhoto} alt="" />
                    </span>
                </div>
            </section>
            
            {children}
            
        </div>
    )
    
}

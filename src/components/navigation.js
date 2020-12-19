import React from 'react'
import {Link} from 'gatsby'
import ThemeChanger from '../components/themeChanger'

export default (props) => (
    
    <div className="navigation-wrap">
        
        <nav className="navigation">
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/fundraising">Fundraising</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            
            {/* <ThemeChanger/> */}
            
        </nav>
        
    </div>
    
)

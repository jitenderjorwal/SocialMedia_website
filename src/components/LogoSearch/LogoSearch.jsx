import "./LogoSearch.css"
import React from 'react';
import logo from '../../img/logo (3).png'
import searchicon from '../../img/searchicon.png'

const LogoSearch=()=>{
    return(
            <div className='LogoSearch'>
                   <div className="logo">
                   <img src={logo} alt=""/>
                   </div>
                    <div className="Search">
                        <input type="text" placeholder="#Explore" />
                        
                        <img src={searchicon} alt=""/>
                        

                    </div>
            </div>
            
    )
}

export default LogoSearch;
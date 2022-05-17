import React from "react"
import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
      <>
        <header id='site-header' className="container-fluid py-3 mb-5">
            <nav className="row">

                <figure className="logo col-2 mb-0">
                    <NavLink to="/">
                        <img src="./../lib/img/logo.png" alt="logo" />
                    </NavLink>
                </figure>

                <div className="bars" id="nav-action"><span className="bar"></span></div>

                <nav id="nav">
                    <ul 
                        className="d-flex justify-content-end col-10 mb-0"
                        itemScope itemType="http://schema.org/SiteNavigationElement"
                    >
                        <li itemProp="name" className="shape-circle circle-one">
                            <NavLink itemProp="url" activeclassname="active" to="/blog">Blog</NavLink>                  
                        </li>      
                        <li itemProp="name" className="shape-circle circle-two">
                            <NavLink itemProp="url" activeclassname="active" to="/category/mundane">Mundane</NavLink>
                        </li>                  
                        <li itemProp="name" className="shape-circle circle-three">                            
                            <NavLink itemProp="url" activeclassname="active" to="/category/mysticism">Mysticism</NavLink> 
                        </li>
                        <li itemProp="name" className="shape-circle circle-five">
                            <NavLink itemProp="url" activeclassname="active" to="/category/developer">Developer</NavLink>                             
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
      </>
    )
  }
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
export const NavBarBig = (props) => {
    const navigate = useNavigate();
    let listener = null
    const [scrollState, setScrollState] = useState("navbar navbar-default navbar-expand-lg navbar-expand-md navbar-fixed-top")
    
    useEffect(() => {
         document.querySelector('#root').addEventListener("scroll", e => {
        let scrolled =  e.target.scrollTop
        console.log(scrolled)
        if (scrolled > 120) {
            setScrollState("navbar active navbar-default navbar-expand-lg navbar-expand-md navbar-fixed-top")
        } else {
          if (scrollState !== "top") {
            setScrollState("navbar navbar-default navbar-expand-lg navbar-expand-md navbar-fixed-top")
          }
        }
      },true )
      // return () => {
      //   document.removeEventListener("scroll", listener)
      // }
    }, [scrollState])
    
    const scrollTo = async (id) => {
      let element = document.getElementById(id);
      if(element == undefined) {
        console.log("dfdsf")
        await navigate(`/`)
  
        element = document.getElementById(id);
        
    }
      element.scrollIntoView({
        behavior: "smooth",
      });


      
    };
    return(
  

      <nav id='menu' className= {scrollState}>
        <div className='container-fluid '>
  
          <div className='navbar-header d-dflex justify-content-between'>
            <div > 
            <button
              type='button'
              className='navbar-toggle collapsed '
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
  
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand page-scroll' href='#page-top' >
              Bartalovics Méhész 
            </a>{' '}
            </div>
            
            
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
              </li>
              <li>
                <a className='page-scroll' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' onClick={
                  () => scrollTo("about")
                  }>
                  Rólunk
                </a>
              </li>
              <li className="nav-item" id="navItemMobile">
                <a className='page-scroll '  onClick={() => scrollTo("about3")}>
                  Tudtad-e?
                </a>
              </li>
              <li className="nav-item">
                <a  className='page-scroll' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' onClick={() => scrollTo("services")}>
                  Amivel Foglalkozunk
                </a>
              </li>
              <li className="nav-item">
                <a  className='page-scroll' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' onClick={() => scrollTo("portfolio")}>
                  Gallery
                </a>
              </li>
              <li>
                <a  className='page-scroll' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' onClick={() => scrollTo("testimonials")}>
                  Rólunk Mondták
                </a>
              </li>
              <li>
                <a className='page-scroll' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' onClick={() => scrollTo("team")}>
                  Csapat
                </a>
              </li>
              <li>
                <a className='page-scroll' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' onClick={() => scrollTo("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
}
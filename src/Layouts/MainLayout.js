import { useState, useEffect } from 'react'
import { Navigation } from '../components/navBars/navigation'
import { Header } from '../components/header'
import { Features } from '../components/features'
import { About } from '../components/about'
import { MyCarousel } from '../components/carosuel'
import { Services } from '../components/services'
import { MyGallery } from '../components/gallery'
import { Testimonials } from '../components/testimonials'
import { Team } from '../components/Team'
import { Contact } from '../components/contact'
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll'
import { useRef } from 'react';
import Profile from './Profile'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const MainLayout = (landingPageData) => {
  // const [landingPageData, setLandingPageData] = useState({})
  // useEffect(() => {
  //   setLandingPageData(JsonData)
  // }, [])
   useEffect(() => {

     console.log("mydata")
     console.log(landingPageData)
  }, [])

  return (
              <div>
            <Header data={landingPageData.landingPageData.Header} />
            <Features data={landingPageData.landingPageData.Features} />
            <About data={landingPageData.landingPageData.About} />
            <MyCarousel data={landingPageData.landingPageData.About} />
            <Services data={landingPageData.landingPageData.Services} />
            <MyGallery />
            <Testimonials data={landingPageData.landingPageData.Testimonials} />
            <Team data={landingPageData.landingPageData.Team} />
            <Contact data={landingPageData.landingPageData.Contact} />
          </div>
  )
}

export default MainLayout
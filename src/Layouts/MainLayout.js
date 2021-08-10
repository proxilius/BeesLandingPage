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

const MainLayout = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  const myRef = useRef(null)
  return (
              <div>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <MyCarousel data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <MyGallery />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </div>
  )
}

export default MainLayout
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Holi from '../pages/Holi'
import CyberSecurity from '../pages/CyberSecurity'
import Graduation from '../pages/Graduation'
import Gallery from '../pages/Gallery'
import AboutUs from '../pages/AboutUs'
import News from '../pages/News'
import Download from '../pages/Download'
import Course from '../pages/Course'
import BBA from '../pages/BBA'
import MBA from '../pages/MBA'
import MPHIL from '../pages/Mphil'
import PHD from '../pages/Phd'
import ScrollToTop from '../components/ScrollToTop'
import Home from '../pages/Home'
import Contact from '../pages/Contact'

const MyRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/news-and-notice' element={<News />} />
        <Route path='/download' element={<Download />} />
        <Route path='/course' element={<Course />} />
        <Route path='/course/bba' element={<BBA />} />
        <Route path='/course/mba' element={<MBA />} />
        <Route path='/course/mphil' element={<MPHIL />} />
        <Route path='/course/phd' element={<PHD />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/graduation-ceremony' element={<Graduation />} />
        <Route path='/gallery/holi' element={<Holi />} />
        <Route path='/gallery/cyber-security' element={<CyberSecurity />} />
      </Routes>
    </>
  )
}

export default MyRoute
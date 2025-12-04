import React from 'react'
import Header from '../Header/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'
import Testimonial from '../LandingPage/Testimonial'
import Subscribe from '../LandingPage/Subscribe'
import Footer from '../Footer/Footer'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-800 font-['poppins']">
      <DreamJob/>
      <Companies/>
      <JobCategory/>
      <Working/>
      <Testimonial/>
      <Subscribe/>
    </div>
  )
}

export default Homepage
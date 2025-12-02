import React from 'react'
import Header from '../Header/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-800 font-['poppins']">
      <Header/>
      <DreamJob/>
      <Companies/>
      <JobCategory/>
      <Working/>
    </div>
  )
}

export default Homepage
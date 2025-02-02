import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import JobListing from '../components/JobListing'
import Footer from '../components/Footer'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        
      
      <Hero/>
      <Card/>
      <JobListing/>
      <ViewAllJobs/>
      <Footer/>
      
    </>
  )
}

export default HomePage
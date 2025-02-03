import React from 'react'
import CardComponent from './CardComponent'

const JobListing = () => {
  return (
    
    <div className='flex flex-col items-center justify-center bg-blue-200' >
      <h1 className='text-3xl mt-5'>Recent Jobs</h1>
      <div className='flex flex-row bg-blue-950'>
        <CardComponent/>

    </div>
  

    </div>
  )
}

export default JobListing
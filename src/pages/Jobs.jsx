import React from 'react'
import CardComponent from '../components/CardComponent'

const Jobs = () => {
  return (
    <div className='flex flex-col items-center justify-center' >
      <h1 className='text-3xl mt-5 mb-5'>Browse Jobs</h1>
      <div className='flex flex-row bg-blue-950'>
        <CardComponent isHome = {true}/>

    </div>
  

    </div>
    
  )
}

export default Jobs
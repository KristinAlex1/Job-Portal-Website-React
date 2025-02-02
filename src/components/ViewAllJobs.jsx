import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <div className='flex justify-center items-center m-10'>
        <NavLink to = '/jobs'>
            <button  className='h-15 w-100 flex justify-center shadow-md items-center text-white bg-blue-700 rounded-4xl'>View All Jobs</button>

        </NavLink>
        
    </div>
  )
}

export default ViewAllJobs
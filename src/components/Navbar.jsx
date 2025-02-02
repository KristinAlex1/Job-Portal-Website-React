import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='bg-blue-700 flex flex-row items-center justify-between '>
            <div className='flex ml-10'>
                <FaReact className='text-white h-10 w-10 mr-3'/>
                <h1 className='text-white rounded-full font-medium  text-3xl text-bold mr-7'>React Jobs</h1>
            </div>
            
            <div className='flex p-5 text-white'>
                
                <Link className='mr-7 text-2xl hover:text-blue-500 transition duration-500' to = '/home'>Home</Link>
                <Link className='mr-7 text-2xl hover:text-blue-500 transition duration-500' to = '/jobs'>Jobs</Link>
                <Link className='mr-7 text-2xl hover:text-blue-500 transition duration-500' to = '/addjobs'>Add Jobs</Link>
                <Link className='mr-7 text-2xl hover:text-blue-500 transition duration-500' to = '/about'>About</Link>
            </div>

        </div>
    </>
  )
}

export default Navbar
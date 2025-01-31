import React from 'react'
import { FaReact } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
        <div className='bg-blue-600 flex flex-row items-center justify-between '>
            <div className='flex ml-10'>
                <FaReact className='text-white h-10 w-10 mr-3'/>
                <h1 className='text-white rounded-full font-medium  text-3xl text-bold mr-7'>React Jobs</h1>
            </div>
            
            <div className='flex p-5 text-white'>
                
                <a className='mr-7 text-2xl hover:text-blue-500 transition duration-500' href = '/home'>Home</a>
                <a className='mr-7 text-2xl hover:text-blue-500 transition duration-500' href = '/home'>Jobs</a>
                <a className='mr-7 text-2xl hover:text-blue-500 transition duration-500' href = '/home'>Add Jobs</a>
            </div>

        </div>
    </>
  )
}

export default Navbar
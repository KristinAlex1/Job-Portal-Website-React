import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const classStyle = ({isActive} ) => (
    isActive ? 'p-2 rounded-xl mr-7 text-2xl flex text-white bg-blue-950' : 'p-2 mr-7 text-2xl flex items-center justify-center '  


  )
  return (
    <>
        <div className='bg-blue-700 flex flex-row items-center justify-between '>
            <div className='flex ml-10'>
                <FaReact className='text-white h-10 w-10 mr-3'/>
                <h1 className='text-white rounded-full font-medium  text-3xl text-bold mr-7'>React Jobs</h1>
            </div>
            
            <div className='flex p-5 text-white'>
                
                <NavLink className={classStyle}  to = '/'>Home</NavLink>
                <NavLink className={classStyle} to = '/jobs'>Jobs</NavLink>
                <NavLink className={classStyle} to = '/addjobs'>Add Jobs</NavLink>
                <NavLink className={classStyle} to = '/about'>About</NavLink>
            </div>

        </div>
    </>
  )
} 

export default Navbar
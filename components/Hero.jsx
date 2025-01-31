import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center bg-blue-600 p-4 pb-10'>
            <h1 className='text-white text-5xl font-medium pt-18 pb-5'>Become a React Developer !</h1>
            <img  src = {'./Images/logo.gif'} className='text-blue pt-5 h-35 w-30 mix-blend-multiply '/>
            <h2 className='text-white text-xl pt-5'>Find the perfect React job</h2>
        </div>
    </>
  )
}

export default Hero
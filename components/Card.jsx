import React from 'react'



const Card = () => {
  return (
    <div className='flex flex-row items-center justify-center'>
        <div className='h-40 w-200 bg-gray-100 rounded-2xl flex flex-col p-5 m-10'>
        <h1 className='text-2xl font-semibold'>For Developers</h1>
        <h3 className='pt-2'>Browse our React jobs and start you career</h3>
        <button className='bg-black h-10 w-25 text-white mt-3 rounded-2xl'>
        Browse
        </button>

        </div>
        <div className='h-40 w-200 bg-blue-100 rounded-2xl flex flex-col p-5 m-10'>
        <h1 className='text-2xl font-semibold'>For Employers</h1>
        <h3 className='pt-2'>Post React jobs and grow your company</h3>
        <button className='bg-black h-10 w-25 text-white mt-3 rounded-2xl'>
        Browse
        </button>

        </div>

    </div>
    

  )
}

export default Card
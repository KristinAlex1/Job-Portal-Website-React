import React, { useState } from 'react'
import jobs from "./jobs.json"; // Import JSON




const CardComponent = () => {
    
    

    

    const [showFullDescription,setShowFullDescription] = useState(new Array(jobs.jobs.length).fill(false));
    
        
    
    const toggle = (index) => {
        setShowFullDescription((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })

    }
    
  return (
    
    <div className='flex flex-row items-center justify-center bg-blue-200 w-full'>
         {jobs.jobs.map((item, index) => (
        
        <div key={index} className='w-110 mr-3 ml-3 mt-10 mb-10 rounded-3xl h-90 bg-blue-300'>
        
            <h1 className='ml-3 mt-4'>
                Full time
            </h1>
            <h2 className='ml-3 mt-2 text-3xl font-semibold'>
                {item.title}
            </h2>
            <h1 className='ml-3 mt-2'>
                {showFullDescription[index] ? item.description : item.description.substring(0,90)+ '...' }<button onClick = {() =>toggle(index)}> {showFullDescription[index] ? 'less' : 'more'}</button>
            </h1>
            <h1 className='ml-3 mt-2 mb-3'>
                {item.salary}
            </h1>
            <hr className='ml-3 mr-3 opacity-25'></hr>
            <h1 className='ml-3 mt-2'>
                {item.location}
            </h1>

        </div>

   ))}


    </div>
  
        

   
  )
}

export default CardComponent
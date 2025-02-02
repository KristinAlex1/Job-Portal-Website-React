import React, { useEffect, useState } from 'react'

import { FaMapLocation, FaMapLocationDot } from 'react-icons/fa6';
import { FaMapMarker } from 'react-icons/fa';




const CardComponent = ({isHome = false}) => {

    const [job,setJob] = useState([]);

    const fetchJobs = async () => {
        try {
            const res = await fetch('http://localhost:8000/jobs')
            const data  = await res.json();
            setJob(data);       
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);
    
    

    const jobListing = isHome ? job : job.slice(0, 3);

    const [showFullDescription,setShowFullDescription] = useState(new Array(jobListing).fill(false));
    
        
    
    const toggle = (index) => {
        setShowFullDescription((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })

    }
    
  return (
    
    <div className='flex flex-row flex-wrap items-center justify-center bg-blue-200 w-full'>
         {jobListing.map((item, index) => (
        
        <div key={index} className='w-80 mr-3 ml-5 mt-10 mb-10 shadow-md rounded-3xl h-110 bg-blue-300'>
        
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
            <h1 className='flex items-center p-2 ml-3 mt-2 text-red-900'>
                <FaMapMarker/>{item.location}
            </h1>

        </div>

   ))}


    </div>
  
        

   
  )
}

export default CardComponent
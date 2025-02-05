import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Card from './components/Card'
import JobListing from './components/JobListing'
import Footer from './components/Footer'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddJobs from './pages/AddJobs';
import Jobs from './pages/Jobs';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';

const addJob = async (newJob) => {
  const res = await fetch('/api/jobs',{
    method:'POST',
    header:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify(newJob),
  });
  return;
};

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE'
    });
    return;

  };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<MainLayout/>}>
      <Route index element = {<HomePage/>}/>
      <Route path = '/jobs' element = {<Jobs/>}/>
      
      <Route path = '/jobs/:id' element = {<JobPage deleteJob = {deleteJob}/>}/>
      <Route path = '/addjobs' element = {<AddJobs addJobSubmit = {addJob}/>}/>
      <Route path = '/about' element = {<AboutPage/>}/>
      <Route path = '*' element = {<NotFoundPage/>}/>

    </Route>
  )
)

const App = () => {
  return (
    <>
      
      <RouterProvider router={router} />


    </>
      
  )
}

export default App
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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<MainLayout/>}>
      <Route index element = {<HomePage/>}/>
      <Route path = '/about' element = {<AboutPage/>}/>

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
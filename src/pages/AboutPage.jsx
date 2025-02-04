import React from 'react'

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h1>
        <p className="text-lg">
          Hi! I'm <span className="font-semibold">KrisCodes</span>, a passionate Full Stack Developer.  
          This project was created as part of my practice and learning journey in web development.
        </p>
        <p className="mt-4 text-gray-700">
          I specialize in building modern, responsive, and scalable web applications using React, Node.js, Express, and MongoDB.
          I enjoy solving problems, learning new technologies, and improving my coding skills.
        </p>
        <p className="mt-6 text-gray-600">
          Feel free to explore and check out my work! 🚀
        </p>
      </div>
    </div>
  )
}

export default AboutPage
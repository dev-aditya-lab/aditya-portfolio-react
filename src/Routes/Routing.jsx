import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Contact from '../page/Contact'
import Project from '../page/Project'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </>
  )
}

export default Routing
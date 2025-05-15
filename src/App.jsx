import React from 'react'
import Home from './pages/Home.jsx'
import Applications from './pages/Applications.jsx'
import ApplyJobs from './pages/ApplyJobs.jsx'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/apply-job/:id' element={<ApplyJobs />} />
      </Routes>

    </div>
  )
}

export default App

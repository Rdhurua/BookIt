import React from 'react'
import HomePage from './pages/Home'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default App

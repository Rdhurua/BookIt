import React from 'react'
import HomePage from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import DetailsPage from './pages/DetailsPage'
import Checkout from './pages/Checkout'
import Result from './pages/Result'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/details/:id' element={<DetailsPage/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/result' element={<Result/>}/>

    </Routes>
  )
}

export default App

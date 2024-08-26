import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './Pages/Homepage'
import ProductPages from './Pages/ProductPages'

const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element ={<Layout/>}>
             <Route index element={<Homepage/>}/>
             <Route path='product/' element={<ProductPages/>}/>
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoute
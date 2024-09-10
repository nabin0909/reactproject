import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './Pages/Homepage'
import ProductPages from './Pages/ProductPages'
import ProductDetail from './Pages/ProductDetail'
import Carts from './Pages/Carts'


const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element ={<Layout/>}>
             <Route index element={<Homepage/>}/>
             <Route path='product/' element={<ProductPages/>}/>
             <Route path='productdetail/:productId' element={<ProductDetail/>}/>
             <Route path='cart' element={<Carts/>}/>
             
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoute
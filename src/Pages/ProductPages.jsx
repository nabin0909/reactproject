import React,{useState, useEffect}from 'react'
import Cart from '../components/Cart'
import axios from 'axios'


const ProductPages = () => {
  const[product, setProduct]= useState([])
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then(res=>setProduct(res.data))
    .catch(err=>console.log(err))
  })
  return (
    <div className="Productionpage my-10 flex flex-wrap justify-evenly">
      {product.map(item=>(
        <Cart data={item}/>
      ))
      }
    </div>
     
  
  )
}

export default ProductPages
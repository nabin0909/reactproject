import React from 'react'

export const Button = ( props) => {
  return (
    <>
    <button className='text-black-500 bg-orange-300 rounded-lg p-3 mx-auto hover:text-green-600 hover:bg-white  '>{props.button_content} </button>
    </>
  )
}

import React from 'react'

const Button = ({buttonName}) => {
  return (
    <div className='button bg-gray-200 m-2 px-4 py-1 rounded-md'>
      <span>{buttonName}</span>
    </div>
  )
}

export default Button

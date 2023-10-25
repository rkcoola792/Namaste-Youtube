import React from 'react'
import Button from './Button'
import { videoCategory } from '../utils/constants'

const ButtonList = () => {
  return (
    <div className='flex m-4'>
      {videoCategory.map((videoCategory,index)=>
      <Button key={index} buttonName={videoCategory}></Button>)}
    </div>
  )
}

export default ButtonList

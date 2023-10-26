import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SideContainer from './SideContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      
      <div className="flex ">
        <SideContainer  />
        <Outlet/>
      </div>
    </div>
  );
}

export default Body

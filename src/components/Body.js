import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SideContainer from './SideContainer'

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <SideContainer  />
        <MainContainer />
      </div>
    </div>
  );
}

export default Body

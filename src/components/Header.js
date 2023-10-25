import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const isHamMenuOpen=useSelector(store=>store.app.isMenuOpen)
  const dispatch=useDispatch();
  console.log("storeData",isHamMenuOpen)
  const handleHamButton=()=>{
    dispatch(toggleMenu(!isHamMenuOpen))
  }
  return (
    <div className="Header grid grid-flow-col p-1 shadow-lg ">
      <div className="left-container flex align-middle col-span-1">
        <img
          className="hamburger-icon h-8 mt-3 ml-4 cursor-pointer"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          onClick={handleHamButton}
        ></img>

        <img
          className="youtube-icon h-14 mx-2 "
          src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
        ></img>
      </div>
      <div className="mid-container col-span-10 text-center mt-3  ">
        <input
          className="w-1/2 border border-gray-400 p-1 px-4 rounded-l-full "
          type="text"
          placeholder="What would you like to watch"
        ></input>
        <button className="border border-gray-400 p-1 px-4 rounded-r-full  ">Search</button>
      </div>
      <div className="right-container col-span-1">
        <img
          className="h-10 mt-2"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;

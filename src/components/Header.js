import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const isHamMenuOpen=useSelector(store=>store.app.isMenuOpen)
  const dispatch=useDispatch();

  const [searchQuery,setSearchQuery]=useState("");
  const [suggestion,setSuggestion]=useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false);

  useEffect(()=>{


// implementing debouncing
// make an api call after every keypress
// but if the difference between two keypress is less than 200ms neglect the api call
const timer =setTimeout(()=>getSearchSuggestions(),200);

return()=>{
  clearInterval(timer)
}

  },[searchQuery])

  const getSearchSuggestions=async()=>{
    console.log("API Call --",searchQuery);
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json=await data.json()
    // console.log("API search results", json[1])
    setSuggestion(json[1])
  }

  // console.log("storeData",isHamMenuOpen)
  const handleHamButton=()=>{
    dispatch(toggleMenu(!isHamMenuOpen))
  }
  return (
    <div className="Header grid grid-flow-col p-1 shadow-lg">
      <div className="left-container flex align-middle col-span-1">
        <img
          className="hamburger-icon h-8 mt-3 ml-4 cursor-pointer"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          onClick={handleHamButton}
        ></img>
        <a href="/">
          <img
            className="youtube-icon h-14 mx-2 "
            src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
          ></img>
        </a>
      </div>
      <div className="mid-container col-span-10 text-center mt-3  ">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-1 px-4 rounded-l-full "
            type="text"
            placeholder="What would you like to watch"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
          ></input>
          <button className="border border-gray-400 p-1 px-4 rounded-r-full  ">
            Search
          </button>
        </div>
        <div className="text-left ml-48 absolute bg-white w-[28.5rem] shadow-lg rounded border border-gray-200">
          <ul>
            {
              showSuggestion && suggestion.map(ele => 
                <li className="hover:bg-gray-100 pb-2 px-4">{ele}</li>
              )}
     
          </ul>
        </div>
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

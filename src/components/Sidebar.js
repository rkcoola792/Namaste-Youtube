import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isHamMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className=''>
      {isHamMenuOpen && (
        <div className="sidebar-conatiner shadow-lg w-48 p-8">
          <div className="">
            <ul >
              <li className='my-1'>Home</li>
              <li className='my-1'>Shorts</li>
              <li className='my-1'>Subscription</li>
              <li className='my-1'>Youtube Music</li>
            </ul>
          </div>

          <div className="mt-4">
            <h1 className="font-semibold">You</h1>
            <ul>
              <li className='my-1'>Your Channel</li>
              <li className='my-1'>History</li>
              <li className='my-1'>Your Videos</li>
              <li className='my-1'>Watch Later</li>
              <li className='my-1'>Downloads</li>
              <li className='my-1'>Show More</li>
            </ul>
          </div>

          <div className="mt-4">
            <h1 className="font-semibold">Explore</h1>
            <ul>
              <li className='my-1'>Trending</li>
              <li className='my-1'>Shopping</li>
              <li className='my-1'>Movies</li>
              <li className='my-1'>Live</li>
              <li className='my-1'>Gaming</li>
              <li className='my-1'>News</li>
              <li className='my-1'>Fashion</li>
              <li className='my-1'>Podcast</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar
